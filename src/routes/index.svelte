<script lang="ts">
  import { loadStripe } from "@stripe/stripe-js";
  import Elements from "$lib/Elements.svelte";

  import CardNumberElement from "$lib/CardNumberElement.svelte";

  const stripe = loadStripe("pk_test_MRUXyvBP7v4GdERzwj0sQbrC00IGlVG0sI");
</script>

<main>
  <Elements stripePromise={stripe}
    ><CardNumberElement
      on:change={(e) => {
        console.log(e);
      }}
    /></Elements
  >
</main>

<style>
</style>
