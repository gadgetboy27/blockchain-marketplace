import React, { Component } from 'react';


class Main extends Component {
  
    render() {
      return (
        <div id='content'>
          <main>
              <section className="py-5 text-left container">
                <div className="row py-lg-5">
                  <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-light">Blockchain Based Buy n Sell Market</h1>
                      <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                      <p>&nbsp;</p>
                  <h2>Add Your Product</h2>
                    <form onSubmit={(event) => {
                      event.preventDefault()
                      const name = this.productName.value
                      const price = window.web3.utils.toWei(this.productPrice.value.toString(), 'Ether')
                      this.props.createProduct(name, price)}}>
                      <div className='form-group mr-sm-2'>
                        <input
                          id='productName'
                          type='text'
                          ref={(input)=>{this.productName = input}}
                          className='form-control'
                          placeholder='Product Name'
                          required />
                          </div>
                      <div className='form-group mr-sm-2'>
                        <input
                            id='productPrice'
                            type='text'
                            ref={(input)=>{this.productPrice = input}}
                            className='form-control'
                            placeholder='Product Price'
                            required />
                        </div> 
                        <button type="submit" className="btn btn-primary btn-md px-4 gap-3">Add Product</button>
                      </form>
                    {/* <p>&nbsp;</p> */}
                  </div>
                </div>
              {/* </section> */}
          {/* where boxes start */}
          <p>&nbsp;</p>
            <h2>Products To Buy</h2>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Price in ETH</th>
                      <th scope="col">Owners Account</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody id='productList'>
                    { this.props.products.map((product, key) =>{
                      return(
                        <tr key={key}>
                      <th scope='row'>{product.id.toString()}</th>
                      <td>{product.name}</td>
                      <td>{window.web3.utils.fromWei(product.price.toString(), 'Ether')} ETH</td>
                      <td>{product.owner}</td>
                      <td></td>
                      <td>
                        { !product.purchased 
                        ? <button 
                          name={product.id}
                          value={product.price}
                          onClick={(event) => { 
                            this.props.purchaseProduct(event.target.name, event.target.value)
                          }}
                          >Buy Me
                            </button>
                            : null
                          }
                          </td>
                        </tr>
                      )
                    })
                  }
                  </tbody>
                </table>
              </div>
            </section>
            <div className="album py-5 bg-light">
              <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">NFT Custom cards Can Go Here</h2>

                <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                  <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
                      <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                          <li className="me-auto">
                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                          </li>
                          <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
                            <small>Earth</small>
                          </li>
                          <li className="d-flex align-items-center">
                            <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"/></svg>
                            <small>3d</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" >
                      <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                          <li className="me-auto">
                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                          </li>
                          <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
                            <small>Pakistan</small>
                          </li>
                          <li className="d-flex align-items-center">
                            <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"/></svg>
                            <small>4d</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col">
                    <div className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" href="">
                      <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                        <ul className="d-flex list-unstyled mt-auto">
                          <li className="me-auto">
                            <img src="https://github.com/twbs.png" alt="Bootstrap" width="32" height="32" className="rounded-circle border border-white"></img>
                          </li>
                          <li className="d-flex align-items-center me-3">
                            <svg className="bi me-2" width="1em" height="1em"><use href="#geo-fill"/></svg>
                            <small>California</small>
                          </li>
                          <li className="d-flex align-items-center">
                            <svg className="bi me-2" width="1em" height="1em"><use href="#calendar3"/></svg>
                            <small>5d</small>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="b-example-divider"></div> */}
            
            </main>
            <footer className="text-muted py-5">
              <div className="container">
                <p className="float-end mb-1">
                  <a href="/">Back to top</a>
                </p>
                <p className="mb-1">Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="../getting-started/introduction/">getting started guide</a>.</p>
              </div>
            </footer>   
            <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>     
          </div>
        )
    }
}

  export default Main;