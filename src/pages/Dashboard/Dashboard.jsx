import React from "react";
import { Image } from "react-bootstrap";
import SideNav from "../../components/SideNav";
import "./Dashboard.css";
import iconfury from "../../assests/iconfury.png";
import iconusk from "../../assests/iconusk.png";
import alarm from "../../assests/alarm.png";
import msg from "../../assests/msg.png";
import MyChart from "../../components/Chart";

const Dashboard = () => {
  return (
    <div className="main-container">
      <div className="side-navbar">
        <SideNav />
      </div>
      <div className="center">
        <div className="heading">
          <span className="text">Dashboard</span>
          <span className="icons">
            <Image src={alarm} />
            <Image src={msg} />
          </span>
        </div>
        <div className="seg1">
          <div className="card1">
            <div className="card1-left">
              <div className="logo">
                <Image src={iconfury} />
                <span>FURY</span>
              </div>
              <div className="price">Price</div>
              <div className="dollar">$9.04</div>
              <div className="price">
                Interest rate<span className="percent">2.25%</span>
              </div>
            </div>
            <div className="card1-right">
              <div className="price">Collateral Provided</div>
              <div className="dollar-small">$8.04</div>
              <button className="primary">Provide</button>
            </div>
          </div>
          <div className="card1">
            <div className="card1-left">
              <div className="logo">
                <span>
                  <Image src={iconusk} />
                </span>
                <span>USK</span>
              </div>
              <div className="price">Price</div>
              <div className="dollar">$8.04</div>
              <div className="price">
                Interest rate<span className="percent">2.25%</span>
              </div>
            </div>
            <div className="card1-right">
              <div className="price">Collateral Provided</div>
              <div className="dollar-small">$8.04</div>
              <button className="primary">Provide</button>
            </div>
          </div>
        </div>
        <div className="seg2">
          <div className="graph">
            <div className="top-section">
              <div className="logo">
                <span>
                  <Image src={iconfury} />
                </span>
                <select className="option1">
                  <option value="someOption">FURY/USK</option>
                  <option value="otherOption">FURY</option>
                  <option value="otherOption">USK</option>
                </select>
              </div>
              <div className="segments">
                <div className="segments1">
                  <div className="small-text">Last Price</div>
                  <div className="dollar-small">$32,452.07</div>
                </div>
                <div className="vertical"></div>
                <div className="segments1">
                  <div className="small-text">24h Volume</div>
                  <div className="dollar-small">$8751656 FURY</div>
                </div>
                <div className="vertical"></div>

                <div className="segments1">
                  <div className="small-text">
                    <select className="option2">
                      <option value="someOption">5 minutes</option>
                      <option value="otherOption">30 minutes</option>
                      <option value="otherOption">1 hour</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ borderTop: "1px solid rgba(97, 97, 97, 1)" }}></hr>
            <div className="main-graph">
              <MyChart />
            </div>
          </div>
          <div className="graph-info">
            <div className="heading-major">Provide liquidity</div>
            <div className="heading-minor">You deposit</div>
            <span className="dropdown">
              <input className="input-field"></input>
              <select className="option">
                <option value="someOption">FURY</option>
                <option value="otherOption">USK</option>
              </select>
            </span>
            <div className="heading-minor">You receive</div>
            <span className="dropdown">
              <input className="input-field"></input>
              <select className="option">
                <option value="someOption">FURY</option>
                <option value="otherOption">USK</option>
              </select>
            </span>
            <button className="secondary">Supply</button>
          </div>
        </div>
        <div className="seg3">
          <div className="seg3-heading">
            <span className="seg3-text">Collateral List</span>
            <span className="seg3-text2">My Assets</span>
          </div>
          <table class="table table-borderless">
            <thead className="thead">
              <tr>
                <th scope="col">Assets</th>
                <th scope="col">Market Cap</th>
                <th scope="col">Total Collateralized value</th>
                <th scope="col">Total Borrowed Value</th>
                <th scope="col">Your Borrowed Value</th>
                <th scope="col">{""}</th>
              </tr>
            </thead>
            <tbody className="tbody">
              <tr>
                <td>
                  <div className="logo">
                    <span>
                      <Image src={iconfury} />
                    </span>
                    <span className="fury">FURY</span>
                  </div>
                </td>
                <td>
                  $32,302.00<span className="plus">+2.6%</span>
                </td>
                <td className="align">$32,360,081,012</td>
                <td>$2,360</td>
                <td>$2,360</td>
                <td>&#8942;</td>
              </tr>
              <div style={{ height: 35 }}></div>
              <tr>
                <td>
                  <div className="logo">
                    <span>
                      <Image src={iconusk} />
                    </span>
                    <span className="fury">USK</span>
                  </div>
                </td>
                <td>
                  $32,302.00<span className="minus">-2.6%</span>
                </td>
                <td>$32,360,081,012</td>
                <td>$2,360</td>
                <td>$2,360</td>
                <td>&#8942;</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
