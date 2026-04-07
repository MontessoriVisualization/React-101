import React from 'react'
import useFetch from '../hook/usefetch';

const Weather = () => {

  const { data, error, loading } = useFetch('delhi');

  const toCelsius = (kelvin) => {
    if (typeof kelvin !== 'number') return '--';
    return Math.round(kelvin - 273.15);
  };

  const weather = data?.weather?.[0];
  const main = data?.main;
  const wind = data?.wind;

  if (loading) {
    return (
      <main className='min-h-screen bg-gradient-to-br from-sky-100 via-cyan-100 to-emerald-100 flex items-center justify-center p-4'>
        <div className='w-full max-w-md rounded-3xl border border-white/70 bg-white/70 backdrop-blur-xl shadow-xl p-8'>
          <div className='h-5 w-28 rounded bg-slate-200 animate-pulse mb-6'></div>
          <div className='h-14 w-32 rounded bg-slate-200 animate-pulse mb-4'></div>
          <div className='h-4 w-44 rounded bg-slate-200 animate-pulse mb-8'></div>
          <div className='grid grid-cols-2 gap-3'>
            <div className='h-20 rounded-2xl bg-slate-200 animate-pulse'></div>
            <div className='h-20 rounded-2xl bg-slate-200 animate-pulse'></div>
            <div className='h-20 rounded-2xl bg-slate-200 animate-pulse'></div>
            <div className='h-20 rounded-2xl bg-slate-200 animate-pulse'></div>
          </div>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className='min-h-screen bg-gradient-to-br from-rose-100 via-amber-100 to-orange-100 flex items-center justify-center p-4'>
        <div className='w-full max-w-md rounded-3xl border border-rose-200 bg-white/80 backdrop-blur-xl shadow-xl p-8 text-center'>
          <h1 className='text-2xl font-bold text-rose-700 mb-3'>Could not load weather</h1>
          <p className='text-slate-700'>Please check your API key or internet connection and try again.</p>
        </div>
      </main>
    );
  }

  return (
    <main className='min-h-screen bg-[radial-gradient(circle_at_top,_#e0f2fe_0%,_#ccfbf1_45%,_#f0fdfa_100%)] flex items-center justify-center p-4'>
      <section className='w-full max-w-md rounded-3xl border border-white/70 bg-white/75 backdrop-blur-xl shadow-2xl p-6 sm:p-8'>
        <div className='flex items-start justify-between gap-4 mb-8'>
          <div>
            <p className='text-xs tracking-[0.3em] uppercase text-slate-500'>Weather App</p>
            <h1 className='text-3xl sm:text-4xl font-bold text-slate-900 mt-2'>{data?.name || 'Unknown city'}</h1>
            <p className='text-slate-600 mt-1 capitalize'>{weather?.description || 'No description available'}</p>
          </div>
          <div className='h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-300 to-sky-500 shadow-inner'></div>
        </div>

        <div className='mb-8'>
          <p className='text-6xl sm:text-7xl font-black text-slate-900 leading-none'>
            {toCelsius(main?.temp)}
            <span className='text-3xl align-top'>°C</span>
          </p>
          <p className='text-slate-500 mt-2'>Feels like {toCelsius(main?.feels_like)}°C</p>
        </div>

        <div className='grid grid-cols-2 gap-3'>
          <article className='rounded-2xl bg-white/90 border border-slate-100 p-4'>
            <p className='text-xs uppercase tracking-wider text-slate-500'>Humidity</p>
            <p className='text-2xl font-bold text-slate-900 mt-2'>{main?.humidity ?? '--'}%</p>
          </article>
          <article className='rounded-2xl bg-white/90 border border-slate-100 p-4'>
            <p className='text-xs uppercase tracking-wider text-slate-500'>Pressure</p>
            <p className='text-2xl font-bold text-slate-900 mt-2'>{main?.pressure ?? '--'} hPa</p>
          </article>
          <article className='rounded-2xl bg-white/90 border border-slate-100 p-4'>
            <p className='text-xs uppercase tracking-wider text-slate-500'>Wind</p>
            <p className='text-2xl font-bold text-slate-900 mt-2'>{wind?.speed ?? '--'} m/s</p>
          </article>
          <article className='rounded-2xl bg-white/90 border border-slate-100 p-4'>
            <p className='text-xs uppercase tracking-wider text-slate-500'>Min / Max</p>
            <p className='text-2xl font-bold text-slate-900 mt-2'>
              {toCelsius(main?.temp_min)}° / {toCelsius(main?.temp_max)}°
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Weather