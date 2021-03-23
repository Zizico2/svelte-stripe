<script lang="ts">
  import cardNumber from "$lib/cardNumber";
  import type {
    StripeCardNumberElementOptions,
    StripeElements,
    StripeCardNumberElement,
  } from "@stripe/stripe-js";

  import { getContext } from "svelte";
  import { elementsKey } from "$lib/Elements.svelte";

  export let options: StripeCardNumberElementOptions | undefined = undefined;

  const elements = getContext(elementsKey) as StripeElements;
  export const element: StripeCardNumberElement = elements.create(
    "cardNumber",
    options
  );
</script>

<div use:cardNumber={element} on:change />
