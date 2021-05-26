import React from "react";
import InputLabel from "../components/InputLabel";
// 2. ekrana gel la
export default class MyAccount2 extends React.Component {
    constructor(){
        super();
        this.state = {
            sa:[],
            countries: ["Turkey"],
            aylar: [
                "Ocak",
                "Şubat",
                "Mart",
                "Nisan",
                "Mayıs",
                "Haziran",
                "Temmuz",
                "Ağustos",
                "Eylül",
                "Ekim",
                "Kasım",
                "Aralık"
            ],
            gunler: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"]
            ,yillar:["2020","2019","2018","2017","2016","2015","2014","2013","2012","2011","2010","2009","2008","2007","2006","2005","2004","2003","2002","2001","2000","1999","1998","1997","1996","1995","1994","1993","1992","1991","1990","1989","1988","1987","1986","1985","1984","1983","1982","1981","1980","1979","1978","1977","1976","1975","1974","1973","1972","1971","1970","1969","1968","1967","1966","1965","1964","1963","1962","1961","1960","1959","1958","1957","1956","1955","1954","1953","1952","1951","1950","1949","1948","1947","1946","1945","1944","1943","1942","1941","1940","1939","1938","1937","1936","1935","1934","1933","1932","1931","1930","1929","1928","1927","1926","1925","1924","1923","1922","1921","1920","1919","1918","1917","1916","1915","1914","1913","1912","1911","1910","1909","1908","1907","1906","1905","1904","1903","1902","1901"]
            ,sehirler:['Adana', 'Adıyaman', 'Afyon', 'Ağrı', 'Amasya', 'Ankara', 'Antalya', 'Artvin',
            'Aydın', 'Balıkesir', 'Bilecik', 'Bingöl', 'Bitlis', 'Bolu', 'Burdur', 'Bursa', 'Çanakkale',
            'Çankırı', 'Çorum', 'Denizli', 'Diyarbakır', 'Edirne', 'Elazığ', 'Erzincan', 'Erzurum', 'Eskişehir',
            'Gaziantep', 'Giresun', 'Gümüşhane', 'Hakkari', 'Hatay', 'Isparta', 'Mersin', 'İstanbul', 'İzmir', 
            'Kars', 'Kastamonu', 'Kayseri', 'Kırklareli', 'Kırşehir', 'Kocaeli', 'Konya', 'Kütahya', 'Malatya', 
            'Manisa', 'Kahramanmaraş', 'Mardin', 'Muğla', 'Muş', 'Nevşehir', 'Niğde', 'Ordu', 'Rize', 'Sakarya',
            'Samsun', 'Siirt', 'Sinop', 'Sivas', 'Tekirdağ', 'Tokat', 'Trabzon', 'Tunceli', 'Şanlıurfa', 'Uşak',
            'Van', 'Yozgat', 'Zonguldak', 'Aksaray', 'Bayburt', 'Karaman', 'Kırıkkale', 'Batman', 'Şırnak',
            'Bartın', 'Ardahan', 'Iğdır', 'Yalova', 'Karabük', 'Kilis', 'Osmaniye', 'Düzce']
        }
    }
  componentDidMount(){

    

  }

  render() {
    return (
      <div
        className="my-account-container container-fluid"
        style={{ background: "#F6F6F6" }}
      >
          <div className="sa"></div>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-3">
              <h4>WELCOME BACK!</h4>
              <div className="kisa-cizgi"></div>
              {this.state.sa}

              <nav>
                <ul>
                  <li>My Account</li>
                  <li>My Orders</li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-9" id="selamunaleykum">
              <h4>WELCOME BACK!</h4>
              <div className="kisa-cizgi"></div>

              <form action="">
                <div className="row ">
                  <InputLabel label="Firstname"/>

                  <InputLabel label="Surname" />
                  <InputLabel label="Email" type="mail" />
                  <InputLabel label="Phone Number" type="number" opt="no" />
                  <InputLabel label="Adress 1" />
                  <InputLabel label="Adress 2"opt="no"   />
                  <InputLabel label="Country" ney="select" options={this.state.countries}/>
                  <InputLabel label="State" ney="select" options={this.state.sehirler} className="col-12 col-md-3" />
                  <InputLabel label="Zip Code" className="col-12 col-md-3" />

                  <InputLabel label="Birth Date" opt="no"  ney="select" options={this.state.aylar} className="col-12 col-md-2" />
                  <InputLabel label=" " ney="select" options={this.state.gunler} className="col-12 col-md-2" />
                  <InputLabel label=" " ney="select" options={this.state.yillar} className="col-12 col-md-2" />


                  <InputLabel label="Secondary Phone"opt="no"  type="number" />

                  <div className="row mb-3">
                      <button className="button-primary col-6 ms-auto">SAVE ALL CHANGES</button>
                  </div>




                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
