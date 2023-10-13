import './App.css';
import Market from './features/home/Market';
import LargeDevicesNav from './features/nav/LargeDevicesNav';
import Nav from './features/nav/Nav';
import NavOverLay from './features/nav/NavOverLay';




function App() {

  return (
    <section >
      {/* small device Navigation  */}
      <header className='lg:hidden sticky top-0 z-[50] shadow-xl'>
        <Nav />
        <NavOverLay />
      </header>
      <section className='flex min-h-screen h-full'>
        {/* large device Navigation */}
        <header className='w-1/4 max-w-[275px]  hidden lg:block'>
          <LargeDevicesNav />
        </header>
        <Market />
      </section>
    </section>
  );
}

export default App;
