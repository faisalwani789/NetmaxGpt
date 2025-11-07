const apiKey=import.meta.env.VITE_TMDB_API_KEY
export const LOGO = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"

export const USERICON = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
export const CUSTOMUSERICON = "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
export const KIDSICON = "https://occ-0-2484-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZHGvGso7Ju34l91G3R3IEDBQ6EBNSqP1yYoXEQPp12U7NgE037YbJLjtjQS-KIqTPkAbsnDG0vKEoWSp66TSJ0eKhB2ZHI.png?r=6fb"

// export const API_KEY=37c9415933d8c0890eef849b838dc507


export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: apiKey
  }
};

export const TMDB_BASE_URL = 'https://image.tmdb.org/t/p/original'
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "english" },
   { identifier: "hindi", name: "hindi" },
    { identifier: "urdu", name: "urdu" }
  ]