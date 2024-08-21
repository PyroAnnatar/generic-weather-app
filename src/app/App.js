import React, { useEffect, useRef, useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const inputRef = useRef(null);
  async function fetchy(city = "Istanbul") {
    const key = "ed3c326573f944283811f0f1bc56f3fc";
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=tr`
      );
      const data = await response.json();

      if (data.cod === "404") {
        setNotFound(true);
      } else {
        setNotFound(false);
        setData(data);
      }

      console.log(data);
    } catch (error) {
      console.error(error);
      setNotFound(true);
      setData(null);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchy();
  }, []);

  function handleFetch() {
    fetchy(inputRef.current.value || "Istanbul");
    inputRef.current.value = "";
  }

  function handleEnter(e) {
    console.log(e.key);
    if (e.key === "Enter") handleFetch();
  }
  console.log(data);
  return (
    <div className="h-3/4 w-3/4 flex items-center justify-center flex-col gap-2">
      <div className="flex items-center justify-center gap-1 w-full md:w-3/5">
        <input
          type="text"
          ref={inputRef}
          onKeyDown={handleEnter}
          className="border-[1px] rounded-md border-black pl-2 py-2 flex-grow w-1/2 basis-1/2 sm:basis-0"
          placeholder="Şehir Giriniz"
        />
        <button
          onClick={handleFetch}
          className="bg-blue-500 rounded-md text-white flex-grow basis-1/2 sm:basis-0 p-2"
        >
          Ara
        </button>
      </div>
      {loading ? (
        <p className="text-white text-center">Yükleniyor..</p>
      ) : notFound ? (
        <p className="text-white text-center">Ülke/Şehir bulunamadı</p>
      ) : data?.main ? (
        <WeatherDisplay data={data} />
      ) : null}
    </div>
  );
};

export default App;

// Günaydın, İyi Haftalar 🚀👋

// > Hava durumunu öğrenmek için kendi uygulamamızı oluşturacağız.

// Nasıl oluşturacaksınız?

// Şehir ismini almak için input oluşturup, hava durumu bilgilerini web sayfasında görüntüleyelim.
// OpenWeather sitesini, hava durumu bilgisi sağlaması için kullanabiliriz.

// API, icon kodu ile birlikte gelir. Bu kodu kullanarak hava durumuna göre bir simge görüntülemek de mümkün.

// Çalışacağınız React konseptleri:

// • useRef : Şehir input'una referans aracılığıyla erişim sağlayacağız.
// • Hava durumu bilgilerini saklamak ve güncellemek için useState kullanımı.
// • useEffect: Component'in yüklendiği anda veya belirli bağımlılıklar değiştiğinde çalışan kodları içerecektir. Hava durumu bilgisi almak için asenkron bir fonksiyon kullanımı.

// 🔥
