import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import bgFooter from "../assets/bg-footer.png";
import logoDDV from "../assets/logoDatdongvang.png";

const Footer = () => {
  return (
    <div
      style={{ background: `url(${bgFooter}) center center / cover no-repeat` }}
    >
      <footer>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-4">
              <div className="flex gap-1 items-center mb-6">
                <div className="flex flex-col items-center justify-center leading-none">
                  <div className="flex items-center space-x-2">
                    <img
                      src={logoDDV}
                      alt="Logo Đất Đồng Vàng"
                      className="h-25 md:h-25 w-auto"
                    />
                  </div>
                </div>
                <span className="text-xl font-bold ml-1">
                  CÔNG TY CỔ PHẦN ĐẤT ĐỒNG VÀNG
                </span>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                Trụ Sở Chính : Số 1 Cộng Hòa 3, P. Tân Thành, Q. Tân Phú, TP.HCM
                <br /> <br />
                Hotline : 0909.090.090 <br /> <br />
                Email : info@datdongvang.com <br /> <br />
              </p>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <div className="container mx-auto text-center">
                  <h3 className="text-xl mb-4">Vị trí của chúng tôi</h3>
                  <div className="map-container mx-auto max-w-3xl rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1959.6346073805798!2d106.63319378194048!3d10.79068100752224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eab6bd4e543%3A0x2ad1372b04fec0c!2zMSBD4buZbmcgSMOyYSAzLCBUw6JuIFRow6BuaCwgVMOibiBQaMO6LCBI4buTIENow60gTWluaCA3MDAwMDAsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1744797459844!5m2!1svi!2s"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-lg">
                Copyright © {new Date().getFullYear()} Công ty Cổ phần Đất Đồng
                Vàng
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
