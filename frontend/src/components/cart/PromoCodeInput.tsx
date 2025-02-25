function PromoCodeInput() {
  return (
    <div>
      <div>If you have a promo code, Enter it here</div>
      <form
        className="flex flex-col sm:flex-row"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="promo code"
          className="py-3 px-2 bg-neutral-300 grow"
        />
        <button type="submit" className="py-3 px-14 text-white bg-black">
          Apply
        </button>
      </form>
    </div>
  );
}

export default PromoCodeInput;
