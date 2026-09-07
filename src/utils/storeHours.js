const localTime = new Intl.DateTimeFormat('pt-BR', {
  timeZone: 'America/Bahia',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
})

// Funcionamento diário: das 18h (inclusive) às 23h30 (exclusive).
export function isStoreOpen(date = new Date()) {
  const parts = localTime.formatToParts(date)
  const hour = Number(parts.find(part => part.type === 'hour').value)
  const minute = Number(parts.find(part => part.type === 'minute').value)
  const minutes = hour * 60 + minute
  return minutes >= 18 * 60 && minutes < 23 * 60 + 30
}
