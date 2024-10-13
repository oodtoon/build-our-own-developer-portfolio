import { fail, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { messageSchema } from "$lib";

import { GOOGLE_EMAIL, MY_EMAIL } from "$env/static/private";
import transporter from "$lib/emailSetup.server.js";

export const load = async ({ request }) => {
  const form = await superValidate(request, zod(messageSchema));
  return { form };
};

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(messageSchema));
    if (!form.valid) {
      return fail(400, { form });
    }

    let html = `<pre>${form.data.message}</pre>
    <h2>${form.data.name}'s Email</h2>
    <p>${form.data.email}</p>
    <h2>Skills Needed:</h2>
    <p>${form.data.skillsNeeded}</p>
    <h2>Projects Viewed:</h2>
    <p>${form.data.projectsViewed}</p>
    <h2>Style Selected:</h2>
    <p>${form.data.style}</p>
    `;

    const message = {
      from: GOOGLE_EMAIL,
      to: MY_EMAIL,
      subject: "Interested In Your Developer Skills",
      text: form.message,
      html: html,
    };

    try {
      const sendEmail = async (message: unknown) => {
        await new Promise((resolve, reject) => {
          transporter.sendMail(message, (err: unknown, info: unknown) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              resolve(info);
            }
          });
        });
      };

      await sendEmail(message);

      return { form };
    } catch {
      console.log("email not sent");
      return fail(400, { form });
    }
  },
};
