class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <style>
        footer {
          padding: 50px 0px 0px 0px
          background: #000000;
      }
      
      footer .social li {
          display: inline;
          margin-left: 20px
      }
      
      footer .social li a {
          font-size: 1.25em;
          color: #999
      }

    </style>
    <footer>
		<div class="container">
			<div class="units-row">
			    <div class="unit-50">
          <ul class="social list-flat right">
            <li><a href="my-contacts.html">My Contacts</a></li>
            <li><a href="https://api.whatsapp.com/send?phone=543572582575" target="_blank" class="foot-phone">
            <strong> <img src="https://img.icons8.com/external-those-icons-flat-those-icons/24/000000/external-WhatsApp-Logo-social-media-those-icons-flat-those-icons.png"/> </strong> </a></li>
          </ul>
			    </div>
			    <div class="unit-50">
					<ul class="social list-flat right">
						<li><a href="mailto:dileandrog.dev@gmail.com"  target="_blank"><i class="fa fa-send"></i></a></li>
						<li><a href="https://github.com/dileandrog"  target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="http://twitter.com/dileandrog"  target="_blank"><i class="fa fa-twitter"></i></a></li>
						<li><a href="https://www.instagram.com/_______leandro.di/"  target="_blank"><i class="fa fa-instagram"></i></a></li>
					</ul>
			    </div>
			</div>
		</div>
	</footer>
      `;
  }
}

customElements.define('footer-component', Footer)