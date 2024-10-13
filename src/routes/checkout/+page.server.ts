import { fail, superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { messageSchema } from "$lib";
import { developerStats } from "$lib/store.js";

export const load = async ({ request }) => {
  const form = await superValidate(request, zod(messageSchema));
  return { form };
};

export const actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(messageSchema));
    console.log(form);

    if (!form.valid) {
      return fail(400, { form });
    }

    return { form };
  },
};
