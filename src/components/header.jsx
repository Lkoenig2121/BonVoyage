export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <a
                  href="tel:9175594998"
                  className='btn btn-custom btn-lg'
                >
                  RESERVE NOW
                </a>{' '}
                <div class="president">
                  <p class="pres">Joseph Montanez</p>
                  <p class="phone">917-559-4998</p>
                  <p class="email">bonvoyagelimo@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
