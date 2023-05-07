export default function About(props) {
  let myStyle = {
    color: props.mode === "dark"?"white":"rgb(4, 39, 67)",
    backgroundColor: props.mode ==="dark"?"rgb(4, 39, 67)":"white"
  }
  return (
    <div className='container' style={myStyle}>
      <h1 className='my-3'>About Us</h1>
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
              style={myStyle}
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt esse enim necessitatibus consequatur qui! Excepturi, maiores veniam. Nostrum harum eum quibusdam, natus doloremque voluptates.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
              style={myStyle}
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magnam veritatis esse pariatur delectus cupiditate doloremque eveniet sed quaerat adipisci itaque debitis explicabo est omnis blanditiis quasi quod corrupti praesentium perferendis et culpa asperiores, labore in sit! Repudiandae soluta, atque a sint optio porro odio, dolore, ad quisquam alias neque.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
              style={myStyle}
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body' style={myStyle}>
              This word Counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Orera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
