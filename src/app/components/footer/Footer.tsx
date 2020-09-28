import React from 'react';
import Style from './footer.module.css';

const getDate = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();

const Footer = (): JSX.Element =>
    <section className="mt-auto">
        <footer className={`${Style.footer} p-2`}>
            <div className="d-flex justify-content-center">
                <div className={Style.copyright}>
                    &lt;&gt; by <a href="https://github.com/hjgonzalez06">Hiram González</a> | {getDate}
                </div>
            </div>
        </footer>
    </section>

export default Footer;