import React, { useRef } from "react"
import { preloadImages } from './../js/utils'
import Image from './../img/1.jpg'
import gsap from "gsap"

const Home = () => {
    let frame = useRef(null)
    let overlayPath = useRef(null)
    let menuWrap = useRef(null)
    let menuItem = useRef(null)
    let openMenuCtrl = useRef(null)
    let closeMenuCtrl = useRef(null)
    let title = {
        // eslint-disable-next-line no-undef
        main: useRef(null),
        // eslint-disable-next-line no-undef
        sub: useRef(null)
    }

    let isAnimating = false

    const openMenu = () => {
			if (isAnimating) return
			isAnimating = true
			gsap
				.timeline({
					onComplete: () => (isAnimating = false),
				})
				.set(overlayPath, {
					attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' },
				})
				.to(
					overlayPath,
					{
						duration: 0.8,
						ease: 'power4.in',
						attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' },
					},
					0
				)
				.to(overlayPath, {
					duration: 0.3,
					ease: 'power2',
					attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
					onComplete: () => {
						frame.classList.add('frame--menu-open')
						menuWrap.classList.add('menu-wrap--open')
					},
				})
				// title elements
				.to(
					[title.main, title.sub],
					{
						duration: 0.8,
						ease: 'power3.in',
						y: -200,
						stagger: 0.05,
					},
					0.2
				)

				// now reveal
				.set(menuItem, {
					opacity: 0,
				})
				.set(overlayPath, {
					attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
				})
				.to(overlayPath, {
					duration: 0.3,
					ease: 'power2.in',
					attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' },
				})
				.to(overlayPath, {
					duration: 0.8,
					ease: 'power4',
					attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
				})
				// menu items translate animation
				.to(
					menuItem,
					{
						duration: 1.1,
						ease: 'power4',
						startAt: { y: 150 },
						y: 0,
						opacity: 1,
						stagger: 0.05,
					},
					'>-=1.1'
				)
		}

		// closes the menu
		const closeMenu = () => {
			if (isAnimating) return
			isAnimating = true
			gsap
				.timeline({
					onComplete: () => (isAnimating = false),
				})
				.set(overlayPath, {
					attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' },
				})
				.to(
					overlayPath,
					{
						duration: 0.8,
						ease: 'power4.in',
						attr: { d: 'M 0 0 V 50 Q 50 100 100 50 V 0 z' },
					},
					0
				)
				.to(overlayPath, {
					duration: 0.3,
					ease: 'power2',
					attr: { d: 'M 0 0 V 100 Q 50 100 100 100 V 0 z' },
					onComplete: () => {
						frame.classList.remove('frame--menu-open')
						menuWrap.classList.remove('menu-wrap--open')
					},
				})
				// now reveal
				.set(overlayPath, {
					attr: { d: 'M 0 100 V 0 Q 50 0 100 0 V 100 z' },
				})
				.to(overlayPath, {
					duration: 0.3,
					ease: 'power2.in',
					attr: { d: 'M 0 100 V 50 Q 50 100 100 50 V 100 z' },
				})
				.to(overlayPath, {
					duration: 0.8,
					ease: 'power4',
					attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' },
				})
				// title elements
				.to(
					[title.main, title.sub],
					{
						duration: 1.1,
						ease: 'power4',
						y: 0,
						stagger: -0.05,
					},
					'>-=1.1'
				)
				// menu items translate animation
				.to(
					menuItem,
					{
						duration: 0.8,
						ease: 'power2.in',
						y: 100,
						opacity: 0,
						stagger: -0.05,
					},
					0
				)
		}

  return (
    <>
        <body className="loading">
            <main>
                <div ref={el => (frame = el)} className="frame">
                    <div className="frame__button">
                        <button ref={el => (openMenuCtrl = el)} onClick={openMenu} className="unbutton button-menu" aria-label="Open menu">
                            <svg width="19" height="12" viewBox="0 0 19 12">
                                <path d="m.742 3.26.485.874c.043-.024.13-.07.26-.136.22-.11.476-.233.765-.361A22.92 22.92 0 0 1 4.997 2.62c4.476-1.34 8.75-1.219 12.241 1.1.18.12.357.245.531.376l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008.375 9.443.246 4.71 1.663c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
                                <path d="m.742 6.748.485.874c.043-.023.13-.07.26-.135.22-.111.476-.233.765-.362A22.92 22.92 0 0 1 4.997 6.11c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.245.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 3.864 9.443 3.735 4.71 5.152c-1.037.31-2 .675-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
                                <path d="m.742 10.237.485.874c.043-.024.13-.07.26-.136.22-.11.476-.232.765-.36a22.92 22.92 0 0 1 2.745-1.016c4.476-1.34 8.75-1.22 12.241 1.1.18.12.357.244.531.375l.6-.8a12.46 12.46 0 0 0-.578-.408C14.008 7.353 9.443 7.224 4.71 8.64c-1.037.31-2 .674-2.865 1.06a18.83 18.83 0 0 0-1.103.536Z" />
                            </svg>
                        </button>
                    </div>
                    <h1 className="frame__title"></h1>
                    <nav className="frame__links">
                        <a href="https://www.linkedin.com/in/laura-waterbury/" className="hover-line">Resume</a>
                        <a href="mailto:lauraalyson3@gmail.com" className="hover-line">Contact</a>
                        <a href="https://github.com/lauraalyson" className="hover-line">GitHub</a>
                    </nav>
                    <div className="frame__author"><a href="https://github.com/lauraalyson">@lauraalyson</a></div>
                    <div className="frame__heading">
                        {/* <span className="frame__heading-sub">Laura Waterbury</span> */}
                        <span className="frame__heading-main">Developer & Designer</span>
                    </div>
                </div>
                <div className="content">
                    <h2 className="content__title">
                        <span ref={el => (title.main = el)} className="content__title-main">Laura</span>
                        <span ref={el => (title.sub = el)} className="content__title-sub">Waterbury</span>
                    </h2>
                    <button className="unbutton button-enter" disabled aria-label="Enter the site">
                        <svg width="64" height="51" xmlns="http://www.w3.org/2000/svg">
                            <g stroke="#000" fill="none" fill-rule="evenodd">
                                <path stroke-linecap="square" d="m55.766 32.528-5.125-1.865M52.677 36.938l3.1-4.618" />
                                <path d="M8.773 10.587S-.693 49.485 56.13 32.3" />
                            </g>
                        </svg>
                    </button>
                </div>
                <div ref={el => (menuWrap = el)} className="menu-wrap">
                    <div className="tiles">
                        <div className="tiles__line">
                            <div className="tiles__line-img tiles__line-img--large" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div classNameName="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img tiles__line-img--large" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                        </div>
                        <div className="tiles__line">
                            <div className="tiles__line-img tiles__line-img--large" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div classNameName="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img tiles__line-img--large" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                        </div>
                        <div className="tiles__line">
                            <div className="tiles__line-img tiles__line-img--large" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div classNameName="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img tiles__line-img--large" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                            <div className="tiles__line-img" style={{ backgroundImage: `url(${Image})` }}></div>
                        </div>
 
                    </div>
                    <nav className="menu">
                        <a ref={el => (menuItem = el)} className="menu__item">
                            <span className="menu__item-tiny">fun</span>
                            <span className="menu__item-text">Playground</span>
                        </a>
                        <a ref={el => (menuItem = el)} className="menu__item">
                            <span className="menu__item-text">Digi-seum</span>
                            <span className="menu__item-tiny">playful</span>
                        </a>
                        <a ref={el => (menuItem = el)} className="menu__item">
                            <span className="menu__item-tiny">visual</span>
                            <span className="menu__item-text">Allegory</span>
                        </a>
                        <a ref={el => (menuItem = el)} className="menu__item">
                            <span className="menu__item-text">Earthy</span>
                            <span className="menu__item-tiny">corner</span>
                        </a>
                    </nav>
                    <button ref={el => (closeMenuCtrl = el)} onClick={closeMenu} className="unbutton button-close">
                        <svg width="25" height="16" viewBox="0 0 25 16"><path d="M2.238 7.079h2.727M2.482 9.496l-.666-2.7"/><path d="M23.753 5.403s-1.87 16.88-22.03 1.785"/></svg>
                    </button>
                </div>
                <svg className="overlay" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path ref={el => (overlayPath = el)} className="overlay__path" vector-effect="non-scaling-stroke" d="M 0 100 V 100 Q 50 100 100 100 V 100 z" />
                </svg>
            </main>
            <script type="module" src="js/index.js"></script>
        </body>
    </>
  )
}

export default Home