import type { StripeCardNumberElement } from "@stripe/stripe-js";

export default function cardNumber(
  node: Node,
  stripeElement: StripeCardNumberElement
) {
  const elem = node as HTMLElement;
  stripeElement.on("change", (e) => {
    const event = new CustomEvent("change", { detail: e });
    elem.dispatchEvent(event);
  });
  stripeElement.on("ready", () => {
    const event = new CustomEvent("ready");
    elem.dispatchEvent(event);
  });
  stripeElement.on("focus", () => {
    const event = new CustomEvent("focus");
    elem.dispatchEvent(event);
  });
  stripeElement.on("escape", () => {
    const event = new CustomEvent("focus");
    elem.dispatchEvent(event);
  });
  stripeElement.mount(elem);
}
