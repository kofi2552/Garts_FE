import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import prcimg from "../assets/price-image.png";
import PricingComp from "../components/PricingComp";

const section = (move) => {
  return (
    <div>
      <section>
        <div>
          <div className="text-line">
            <motion.svg
              width="100%"
              height="132"
              viewBox="0 0 1440 132"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: move ? 1 : 0 }}
                transition={{ duration: 10, type: "tween" }}
                d="M0 66.175L3.60902 63.199L7.21805 60.2297L10.8271 57.2736L14.4361 54.3372L18.0451 51.4271L21.6541 48.5497L25.2632 45.7115L28.8722 42.9187L32.4812 40.1776L36.0902 37.4941L39.6992 34.8744L43.3083 32.3241L46.9173 29.849L50.5263 27.4546L54.1353 25.1461L57.7444 22.9287L61.3534 20.8074L64.9624 18.7867L68.5714 16.8713L72.1805 15.0653L75.7895 13.3729L79.3985 11.7976L83.0075 10.3431L86.6165 9.01255L90.2256 7.80892L93.8346 6.73485L97.4436 5.79278L101.053 4.98476L104.662 4.3126L108.271 3.77779L111.88 3.38152L115.489 3.12467L119.098 3.00779L122.707 3.03118L126.316 3.19474L129.925 3.49816L133.534 3.94072L137.143 4.52147L140.752 5.23908L144.361 6.092L147.97 7.07832L151.579 8.19585L155.188 9.44211L158.797 10.8143L162.406 12.3095L166.015 13.9242L169.624 15.6549L173.233 17.4978L176.842 19.4488L180.451 21.5035L184.06 23.6574L187.669 25.9057L191.278 28.2435L194.887 30.6654L198.496 33.1662L202.105 35.7402L205.714 38.3819L209.323 41.0852L212.932 43.8442L216.541 46.6528L220.15 49.5048L223.759 52.3938L227.368 55.3134L230.977 58.2571L234.586 61.2183L238.195 64.1906L241.805 67.1673L245.414 70.1418L249.023 73.1075L252.632 76.0577L256.241 78.9861L259.85 81.886L263.459 84.751L267.068 87.5748L270.677 90.351L274.286 93.0736L277.895 95.7365L281.504 98.3337L285.113 100.86L288.722 103.308L292.331 105.675L295.94 107.953L299.549 110.139L303.158 112.228L306.767 114.214L310.376 116.093L313.985 117.862L317.594 119.515L321.203 121.051L324.812 122.464L328.421 123.753L332.03 124.914L335.639 125.944L339.248 126.842L342.857 127.604L346.466 128.231L350.075 128.72L353.684 129.07L357.293 129.28L360.902 129.35L364.511 129.28L368.12 129.07L371.729 128.72L375.338 128.231L378.947 127.604L382.556 126.842L386.165 125.944L389.774 124.914L393.383 123.753L396.992 122.464L400.602 121.051L404.211 119.515L407.82 117.862L411.429 116.093L415.038 114.214L418.647 112.228L422.256 110.139L425.865 107.953L429.474 105.675L433.083 103.308L436.692 100.86L440.301 98.3337L443.91 95.7365L447.519 93.0736L451.128 90.351L454.737 87.5748L458.346 84.751L461.955 81.886L465.564 78.9861L469.173 76.0577L472.782 73.1075L476.391 70.1418L480 67.1673L483.609 64.1906L487.218 61.2183L490.827 58.2571L494.436 55.3134L498.045 52.3938L501.654 49.5048L505.263 46.6528L508.872 43.8442L512.481 41.0852L516.09 38.3819L519.699 35.7402L523.308 33.1662L526.917 30.6654L530.526 28.2435L534.135 25.9057L537.744 23.6574L541.353 21.5035L544.962 19.4488L548.571 17.4978L552.18 15.6549L555.789 13.9242L559.399 12.3095L563.008 10.8143L566.617 9.44211L570.226 8.19585L573.835 7.07832L577.444 6.092L581.053 5.23908L584.662 4.52147L588.271 3.94072L591.88 3.49816L595.489 3.19474L599.098 3.03118L602.707 3.00779L606.316 3.12467L609.925 3.38152L613.534 3.77779L617.143 4.3126L620.752 4.98476L624.361 5.79278L627.97 6.73485L631.579 7.80892L635.188 9.01255L638.797 10.3431L642.406 11.7976L646.015 13.3729L649.624 15.0653L653.233 16.8713L656.842 18.7867L660.451 20.8074L664.06 22.9287L667.669 25.1461L671.278 27.4546L674.887 29.849L678.496 32.3241L682.105 34.8744L685.714 37.4941L689.323 40.1776L692.932 42.9187L696.541 45.7115L700.15 48.5497L703.759 51.4271L707.368 54.3372L710.977 57.2736L714.586 60.2297L718.196 63.199L721.805 66.175L725.414 69.151L729.023 72.1203L732.632 75.0764L736.241 78.0128L739.85 80.9229L743.459 83.8003L747.068 86.6385L750.677 89.4313L754.286 92.1724L757.895 94.8558L761.504 97.4756L765.113 100.026L768.722 102.501L772.331 104.895L775.94 107.204L779.549 109.421L783.158 111.543L786.767 113.563L790.376 115.479L793.985 117.285L797.594 118.977L801.203 120.552L804.812 122.007L808.421 123.337L812.03 124.541L815.639 125.615L819.248 126.557L822.857 127.365L826.466 128.037L830.075 128.572L833.684 128.968L837.293 129.225L840.902 129.342L844.511 129.319L848.12 129.155L851.729 128.852L855.338 128.409L858.947 127.829L862.556 127.111L866.165 126.258L869.774 125.272L873.383 124.154L876.992 122.908L880.602 121.536L884.211 120.041L887.82 118.426L891.429 116.695L895.038 114.852L898.647 112.901L902.256 110.846L905.865 108.693L909.474 106.444L913.083 104.107L916.692 101.685L920.301 99.1838L923.91 96.6098L927.519 93.9681L931.128 91.2648L934.737 88.5058L938.346 85.6971L941.955 82.8452L945.564 79.9562L949.173 77.0366L952.782 74.0929L956.391 71.1317L960 68.1594L963.609 65.1827L967.218 62.2082L970.827 59.2425L974.436 56.2923L978.045 53.3639L981.654 50.464L985.263 47.599L988.872 44.7752L992.481 41.999L996.09 39.2764L999.699 36.6135L1003.31 34.0163L1006.92 31.4905L1010.53 29.0417L1014.14 26.6753L1017.74 24.3966L1021.35 22.2107L1024.96 20.1224L1028.57 18.1364L1032.18 16.257L1035.79 14.4884L1039.4 12.8346L1043.01 11.2992L1046.62 9.88567L1050.23 8.5971L1053.83 7.43637L1057.44 6.40605L1061.05 5.50844L1064.66 4.74552L1068.27 4.11901L1071.88 3.63026L1075.49 3.28037L1079.1 3.07014L1082.71 3L1086.32 3.07014L1089.92 3.28037L1093.53 3.63026L1097.14 4.11901L1100.75 4.74552L1104.36 5.50844L1107.97 6.40605L1111.58 7.43637L1115.19 8.5971L1118.8 9.88567L1122.41 11.2992L1126.02 12.8346L1129.62 14.4884L1133.23 16.257L1136.84 18.1364L1140.45 20.1224L1144.06 22.2107L1147.67 24.3966L1151.28 26.6753L1154.89 29.0417L1158.5 31.4905L1162.11 34.0163L1165.71 36.6135L1169.32 39.2764L1172.93 41.999L1176.54 44.7752L1180.15 47.599L1183.76 50.464L1187.37 53.3639L1190.98 56.2923L1194.59 59.2425L1198.2 62.2082L1201.8 65.1827L1205.41 68.1594L1209.02 71.1317L1212.63 74.0929L1216.24 77.0366L1219.85 79.9562L1223.46 82.8452L1227.07 85.6971L1230.68 88.5058L1234.29 91.2648L1237.89 93.9681L1241.5 96.6098L1245.11 99.1838L1248.72 101.685L1252.33 104.107L1255.94 106.444L1259.55 108.693L1263.16 110.846L1266.77 112.901L1270.38 114.852L1273.98 116.695L1277.59 118.426L1281.2 120.041L1284.81 121.536L1288.42 122.908L1292.03 124.154L1295.64 125.272L1299.25 126.258L1302.86 127.111L1306.47 127.829L1310.08 128.409L1313.68 128.852L1317.29 129.155L1320.9 129.319L1324.51 129.342L1328.12 129.225L1331.73 128.968L1335.34 128.572L1338.95 128.037L1342.56 127.365L1346.17 126.557L1349.77 125.615L1353.38 124.541L1356.99 123.337L1360.6 122.007L1364.21 120.552L1367.82 118.977L1371.43 117.285L1375.04 115.479L1378.65 113.563L1382.26 111.543L1385.86 109.421L1389.47 107.204L1393.08 104.895L1396.69 102.501L1400.3 100.026L1403.91 97.4756L1407.52 94.8558L1411.13 92.1724L1414.74 89.4313L1418.35 86.6385L1421.95 83.8003L1425.56 80.9229L1429.17 78.0128L1432.78 75.0764L1436.39 72.1203L1440 69.151"
                stroke="#109cb6"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </motion.svg>
          </div>
        </div>
      </section>
      <section>
        <div className="right-side-content">
          <div className="center-content">
            <div className="content">
              <p className="quote-title">Creative Curated Assets</p>
              <div className="quote-container">
                <div className="text-info">
                  Design adds value faster<br></br>than it adds costs
                </div>
                <p className="author">
                  -- Joel Spolsky, Creator of <b>Trello</b>&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-1">
        <div className="center-content">
          <div className="section-1-cont">
            <div className="circle">
              <div>
                <h2>Sell Your Creative Assets Here</h2>
                <p>
                  Ipsum passages, and more recently with desktop publishing
                  software like Aldus PageMaker including versions of Lorem
                  Ipsum.
                </p>
                <Link to="/signup">
                  Start by signing up&nbsp;
                  <BsArrowRightCircleFill size={20} />
                </Link>
              </div>
            </div>
          </div>
          <div className="section-2-cont">
            <div className="price-image">
              <img src={prcimg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <PricingComp />
    </div>
  );
};

export default section;
