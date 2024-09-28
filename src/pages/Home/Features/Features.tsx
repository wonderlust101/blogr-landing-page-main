import editorMobile from '/images/illustration-editor-mobile.svg';
import editorDesktop from '/images/illustration-editor-desktop.svg';
import laptopMobile from '/images/illustration-laptop-mobile.svg';
import laptopDesktop from '/images/illustration-laptop-desktop.svg';
import phone from '/images/illustration-phones.svg';
import './Features.scss'

export default function Features() {
    return (
        <section className="features grid-bleed">
            <h2 className="features__header">Designed for the future</h2>
            
            <div className="features__two-row features__editor">
                <picture className="features__article-img features__article-img--editor" aria-hidden={true}>
                    <source srcSet={editorDesktop} media={'(min-width: 48rem)'}/>
                    <img src={editorMobile} alt="" role="presentation"/>
                </picture>

                <div className="features__articles">
                    <article className="features__article">
                        <h3>Introducing an extensible editor</h3>
                        <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating
                            content. The editor supports management of multiple blogs and allows easy manipulation of
                            embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide
                            easy ways to add functionality or change the looks of a blog.</p>
                    </article>

                    <article className="features__article">
                        <h3>Robust content management</h3>
                        <p>Flexible content management enables users to easily move through posts. Increase the
                            usability of your blog by adding customized categories, sections, format, or flow. With this
                            functionality, you’re in full control.</p>
                    </article>
                </div>
            </div>

            <div className="features__phones grid-bleed">
                <div className="features__one-row">
                    <img className="features__phones-img" src={phone} alt="" role="presentation"/>

                    <article className="features__one-row-article">
                        <h3 className="features__one-row-article-header">State of the Art Infrastructure</h3>
                        <p className="features__one-row-article-body">With reliability and speed in mind, worldwide data
                            centers provide the backbone for ultra-fast
                            connectivity. This ensures your site will load instantly, no matter where your readers are,
                            keeping your site competitive.</p>
                    </article>
                </div>
            </div>

            <div className="features__two-row features__laptop">
                <picture className="features__article-img features__article-img--laptop" aria-hidden={true}>
                    <source srcSet={laptopDesktop} media={'(min-width: 48rem)'}/>
                    <img src={laptopMobile} alt="" role="presentation"/>
                </picture>

                <div className="features__articles">
                    <article className="features__article">
                        <h3>Free, open, simple</h3>
                        <p>Blogr is a free and open source application backed by a large community of helpful
                            developers. It supports features such as code syntax highlighting, RSS feeds, social media
                            integration, third-party commenting tools, and works seamlessly with Google Analytics. The
                            architecture is clean and is relatively easy to learn.</p>
                    </article>

                    <article className="features__article">
                        <h3>Powerful tooling</h3>
                        <p>Batteries included. We built a simple and straightforward CLI tool that makes customization
                            and deployment a breeze, but capable of producing even the most complicated sites.</p>
                    </article>
                </div>
            </div>
        </section>
    )
}