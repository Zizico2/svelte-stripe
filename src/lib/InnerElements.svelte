<script lang="ts">
  import type { Stripe, StripeElementsOptions } from "@stripe/stripe-js";
  import { setContext } from "svelte";
  import { elementsKey, stripeKey } from "$lib/keys";

  export let stripe: Stripe;
  export let options: StripeElementsOptions | undefined = undefined;

  setContext(stripeKey, stripe);
  setContext(elementsKey, stripe.elements(options));
</script>

<slot />
