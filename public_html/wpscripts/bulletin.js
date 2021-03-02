const bulletins = [
  {
    path: 'Bulletins/bulletin_011120.pdf',
    date: '1st November 2020'
  },

  {
    path: 'Bulletins/bulletin_251020.pdf',
    date: '25th October 2020'
  },

  {
    path: 'Bulletins/bulletin_181020.pdf',
    date: '18th October 2020'
  },

  {
    path: 'Bulletins/bulletin_111020.pdf',
    date: '11th October 2020'
  },

  {
    path: 'Bulletins/bulletin_041020.pdf',
    date: '4th October 2020'
  },

  {
    path: 'Bulletins/bulletin_270920.pdf',
    date: '27th September 2020'
  },

  {
    path: 'Bulletins/bulletin_200920.pdf',
    date: '20th September 2020'
  },

  {
    path: 'Bulletins/bulletin_130920.pdf',
    date: '13th September 2020'
  },

  {
    path: 'Bulletins/bulletin_060920.pdf',
    date: '6th September 2020'
  },

  {
    path: 'Bulletins/bulletin_300820.pdf',
    date: '30th August 2020'
  },

  {
    path: 'Bulletins/bulletin_230820.pdf',
    date: '23th August 2020'
  },

  {
    path: 'Bulletins/bulletin_160820.pdf',
    date: '16th August 2020'
  },

  {
    path: 'Bulletins/bulletin_090820.pdf',
    date: '9th August 2020'
  },

  {
    path: 'Bulletins/bulletin_020820.pdf',
    date: '2nd August 2020'
  },

  {
    path: 'Bulletins/bulletin_260720.pdf',
    date: '26th July 2020'
  },

  {
    path: 'Bulletins/bulletin_190720.pdf',
    date: '19th July 2020'
  },

  {
    path: 'Bulletins/bulletin_120720.pdf',
    date: '12th July 2020'
  },

  {
    path: 'Bulletins/bulletin_050720.pdf',
    date: '5th July 2020'
  },

  {
    path: 'Bulletins/bulletin_150320.pdf',
    date: '15th March 2020'
  },

  {
    path: 'Bulletins/bulletin_080320.pdf',
    date: '8th March 2020'
  },

  {
    path: 'Bulletins/bulletin_010320.pdf',
    date: '1st March 2020'
  },

  {
    path: 'Bulletins/bulletin_230220.pdf',
    date: '23th February 2020'
  },

  {
    path: 'Bulletins/bulletin_160220.pdf',
    date: '16th February 2020'
  },

  {
    path: 'Bulletins/bulletin_090220.pdf',
    date: '9th February 2020'
  },

  {
    path: 'Bulletins/bulletin_020220.pdf',
    date: '2th February 2020'
  },

  {
    path: 'Bulletins/bulletin_260120.pdf',
    date: '26th January 2020'
  },

  {
    path: 'Bulletins/bulletin_190120.pdf',
    date: '19th January 2020 '
  },

  {
    path: 'Bulletins/bulletin_120120.pdf',
    date: '12th January 2020'
  }
]

const bulletinDiv = document.getElementById('bulletins')

function bulletinDisplay() {
  if (bulletinDiv) {
    bulletins.map(bulletin => {
      const { path, date } = bulletin;
      const url = `http://www.stjosephshighgate.org.uk/${path}`
      return bulletinDiv.innerHTML += `
        <li class="bulletin">
        <a href="${url}" class="">${date}</a></li>
       `
    })
  }
}

export default bulletinDisplay;
