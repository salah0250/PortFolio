import React from 'react'
import {Link} from 'react-router-dom'
const CTA = () => {
  return (
<section className="cta">
<p className="cta-text">Mon Profile vous interessez ? <br className="sm:block hidden"/>
</p>
<Link to="/contact" className="btn">
    Contactez-moi
</Link>
</section>  )
}

export default CTA