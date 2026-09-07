import { useEffect, useState } from 'react'
import { isStoreOpen } from '../../utils/storeHours'
import styles from './TopBar.module.css'

export default function TopBar() {
  const [open, setOpen] = useState(() => isStoreOpen())

  useEffect(() => {
    let timer
    const update = () => {
      clearTimeout(timer)
      setOpen(isStoreOpen())
      timer = setTimeout(update, 60000 - (Date.now() % 60000))
    }
    update()
    document.addEventListener('visibilitychange', update)
    window.addEventListener('focus', update)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('visibilitychange', update)
      window.removeEventListener('focus', update)
    }
  }, [])

  return <div className={`${styles.bar} ${open ? styles.open : styles.closed}`} role="status" aria-live="polite">
    <a className={styles.message} href={open ? '#cardapio' : '#funcionamento'} aria-label={open ? 'Estamos funcionando! Ver cardápio' : 'Não estamos funcionando no momento! Ver horários de funcionamento'}>{open ? 'Estamos funcionando!' : 'Não estamos funcionando no momento!'}</a>
  </div>
}
