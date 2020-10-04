export const formatMoney = (value: number): string =>
  String(
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    }).format(+value)
  )
