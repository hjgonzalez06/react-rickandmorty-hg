import React from 'react';

const getDate = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();

const Footer = (): JSX.Element =>
    <section className="mt-auto">
        <footer className="footer p-2">
            <div className="d-flex justify-content-center">
                <div>
                    &lt;&gt; by <span>Hiram González</span> | {getDate}
                </div>
            </div>
        </footer>
    </section>

export default Footer;