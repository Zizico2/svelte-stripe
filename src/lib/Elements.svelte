<script lang="ts" context="module">
  import { elementsKey, stripeKey } from "$lib/keys";
  export { elementsKey, stripeKey };
</script>

<script lang="ts">
  import type { Stripe, StripeElementsOptions } from "@stripe/stripe-js";

  import InnerElements from "./InnerElements.svelte";

  export let stripePromise: Promise<Stripe | null>;
  export let options: StripeElementsOptions | undefined = undefined;
</script>

{#await stripePromise}
  <!-- TODO -->
{:then stripe}
  {#if stripe}
    <InnerElements {stripe} {options}><slot /></InnerElements>
  {:else}
    <!-- TODO -->
  {/if}
{:catch error}
  <!-- TODO -->
{/await}
