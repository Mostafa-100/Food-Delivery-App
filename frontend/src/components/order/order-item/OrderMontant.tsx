function OrderMontant({ montant }: { montant: number }) {
  return (
    <div className="pl-2">${montant}</div>
  )
}

export default OrderMontant;