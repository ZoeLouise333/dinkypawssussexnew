import { useState, useEffect } from "react";

export default function Footer() {
  return (
    <>
      <div className="footer__background">
        <div className="footer">
          <div className="footer__column">
            <div className="footer__column--2">
              Website designed & developed by:&nbsp;
              <a className="link" href="https://zoelouise.dev" target="_blank">
                zoelouise.dev
              </a>
            </div>
          </div>

          <div className="footer__icons footer__row footer__column--1">
            <a href="https://www.instagram.com/thedinkypaws/" target="_blank">
              <img
                className="footer__icons--instagram"
                src="/images/icons/instagram.svg"
                alt="Instagram"
              />
            </a>
            <a
              href="https://www.facebook.com/Dinky-Paws-103010098823249"
              target="_blank"
            >
              <img
                className="footer__icons--facebook"
                src="/images/icons/facebook.svg"
                alt="Facebook"
              />
            </a>
            <div className="footer__column--1">
              © 2021 The Dinky Paws All rights reserved
            </div>
          </div>

          <div className="footer__column footer__column--contact">
            <div className="footer__column--4">
              <div>
                <a className="link" href="mailto:thedinkypaws@gmail.com">
                  thedinkypaws@gmail.com
                </a>
              </div>
              <div>
                <a className="link" href="tel:+447715643527">
                  07715 643527
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
