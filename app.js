const express =require ('express')
const app =express()
const {usersData} =require('./users.js')

 const filterSpeciality = (specialty) => {
    return usersData.filter(user => user.specialty === specialty);
  };

app.get('/',(req,res)=>{
  res.send(`<h1>Hola estas en la Home</h1>
            <ul>
              <li><a href="/marketing">Marketing</a></li>
              <li><a href="/developers">developers</a></li>
              <li><a href="/qas">QAs</a></li>
              <li><a href="/ventas">ventas</a></li>
              </ul>`)
            })
  app.get('/marketing',(req,res)=>{
    const marketing =filterSpeciality('marketing')
    res.send(`<h1>Hola estas en Markting</h1>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/marketing">Marketing</a></li>
                <li><a href="/developers">developers</a></li>
                <li><a href="/qas">QAs</a></li>
                <li><a href="/ventas">ventas</a></li>
              </ul>
              <h3>Estos son los usuarios que se dedican al marketing</h3>
              <ul>
               ${marketing.map(user => `<li>${user.id}:${user.name},${user.age} años</li>`).join('')}
            </ul>`
              )
         })

app.get('/developers',(req,res)=>{
  const developers =filterSpeciality('developers')
  res.send(`<h1>Hola estas en Markting</h1>
              <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/marketing">Marketing</a></li>
              <li><a href="/developers">developers</a></li>
              <li><a href="/qas">QAs</a></li>
              <li><a href="/ventas">ventas</a></li>
              </ul>
              <h3>Estos son los usuarios que se dedican al developers</h3>
              <ul>
               ${developers.map(user => `<li>${user.id}:${user.name},${user.age} años</li>`).join('')}
              </ul>`
              )
       })

       app.get('/qas',(req,res)=>{
        const qas =filterSpeciality('QAs')
        res.send(`<h1>Hola estas en QAs</h1>
        <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/marketing">Marketing</a></li>
        <li><a href="/developers">developers</a></li>
        <li><a href="/qas">QAs</a></li>
        <li><a href="/ventas">ventas</a></li>
      </ul>
      <h3>Estos son los usuarios que se dedican al QAs</h3>
                    <ul>
                     ${qas.map(user => `<li>${user.id}:${user.name},${user.age} años</li>`).join('')}
                    </ul>`
                    )
             })

             app.get('/ventas',(req,res)=>{
              const ventas =filterSpeciality('ventas')
              res.send(`<h1>Hola estas en ventas</h1>
              <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/marketing">Marketing</a></li>
              <li><a href="/developers">developers</a></li>
              <li><a href="/qas">QAs</a></li>
              <li><a href="/ventas">ventas</a></li>
            </ul>
            <h3>Estos son los usuarios que se dedican al ventas</h3>
                          <ul>
                           ${ventas.map(user => `<li>${user.id}:${user.name},${user.age} años</li>`).join('')}
                          </ul>`
                          )
                   })
                   
app.use((req,res)=>{
    res.status(404).send('<h1>pagina no encontrada</h1><a href="/">home</a>')
});                   

app.listen(3000, () => {
  console.log('Node.js está escuchando en el puerto 3000 http://localhost:3000');
   });