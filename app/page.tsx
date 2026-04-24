import Counter from './components/Counter'

export default function Home() {
  return (
    <main>
      <h1>Вайб кодинг</h1>
      <p>
        Репозиторий для тестирования возможностей вайб кодинга через сервис{' '}
        <a href="https://kodacode.ru">Kodacode</a>
      </p>
      <Counter />
    </main>
  )
}
