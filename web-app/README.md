# Uygulama Hakkında

  - Bu projede React kullanarak basit bir SPA oluşturdum.
  - Uygulamanın amacı gerçek hayattaki kartviziti simule etmek.
  - İlk önce bizi bir login sayfası karşılıyor. 
  - Giriş yaptıktan sonra bir dashboard ekranı geliyor.
  - Dashboardda bir MaterialUI kütüphanesini kullanarak bir NavBar oluşturdum.
  - Navbar üzerinde uygulama içinde gezinebileceğimiz menulere ve çıkış yapma mekanizmasına yer verdim.
  - NavBar'ın altında  bir alan oluşturdum ve kullanıcının görmek istediği sayfaları bu alanda render ettim.
  - Dashboard sayfasında sol kısımda kullanıcının bilgilerini değiştirebileceği bir form oluşturdum.
  - Sağ tarafta ise formda girilen verileri anlık olarak gösteren bir kartvizit görünümü oluşturdum.
  - Uygulama Hakkında sayfasında bir Accordion menuye yer verdim. Burada kısaca uygulama ve kullanılan teknolojiler hakkındaki bilgilere yer verdim.
  - Hesabım sayfasında basit bir kart component ı oluşturdum ve kullanıcının bilgilerini gösterdim.


# NOTLAR:
  - Projeyi create-react-app ile başlattım (şu anki işyerinde biraz işler yoğun o yüzden zamanı verimli kullanmak istedim)
  - Kod yazarken pascalcase isimlendirme yaptım.
  - Gönderdiğiniz assignment içindekilere örnekler vermeye çalıştım.
    - React kullandım
    - State management için Redux kullandım
    - Routing mekanizması dahil ettim (ReactRouterDOM)
    - Login sayfası yaptım
    - Navigation Bar yaptım.
    - İki tane form alanı oluşturdum. Login sayfasında Formik kullandım ve basit validasyon işlemi yaptım.
    - AJAX requestini simule edebilmek için proje içine bir JSON dosyası koydum ve bu dosyadaki verileri Axios ile çektim.
    - Github'da paylaştım ()
    - Typescript kullandım
    - Hook'lar kullandım
    - Ref Hook kullandım (LoginForm component)
    - UI kit olarak MaterialUI kullandım. Bunun yanında değişik CSS kullanımlarına da örnekler verdim.
    - Heroku'ya deploy ettim ()

# Projeyi çalıştırmak için bu adımları izleyin
  - Git clone ile projeyi bilgisayarınıza alın.
  - Visual Studio Code içinde `cd web-app` komutu ile proje dizinine gidin.
  - Daha sonra `npm install` komutu ile gerekli bağımlılıkları kurun.
  - Bağımlılıklar kurulduktan sonra `npm start` komutunu çalıştırarak uygulamayı `http://localhost:3000` adresinde görüntüleyebilirsiniz.
