import InputsRow from "./InputsRow";
import OrderInput from "./OrderInput";

function OrderForm() {
  return (
    <div className="flex gap-3 flex-col">
      <InputsRow>
        <OrderInput
          name="firstName"
          placeholder="First name"
          className="md:w-1/2"
        />
        <OrderInput
          name="lastName"
          placeholder="Last name"
          className="md:w-1/2"
        />
      </InputsRow>

      <OrderInput type="email" name="email" placeholder="Email addres" />
      <OrderInput name="street" placeholder="Street" />

      <InputsRow>
        <OrderInput name="city" placeholder="City" className="md:w-1/2" />
        <OrderInput
          name="state"
          placeholder="State"
          className="md:w-1/2"
        />
      </InputsRow>

      <InputsRow>
        <OrderInput
          name="zipCode"
          placeholder="Zip code"
          className="md:w-1/2"
        />
        <OrderInput
          name="country"
          placeholder="Country"
          className="md:w-1/2"
        />
      </InputsRow>

      <OrderInput type="phone" name="phone" placeholder="Phone" />
    </div>
  )
}

export default OrderForm;