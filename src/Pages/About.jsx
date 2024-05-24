import React from 'react';
import Banner from '../Components/AboutComp/Banner'
import About from '../Components/AboutComp/About'
import Services from '../Components/AboutComp/Services';
import Portfolio from '../Components/AboutComp/Portfolio';
import Contact from '../Components/LandingComp/Contact';
import Footer from '../Components/LandingComp/Footer';
import Navbar from '../Components/LandingComp/Navbar';


const Home = () => {
  return (
    <div className='bg-g-purple'>
      <div className='flex flex-col justify-center'>
      <svg width="100vw" height="100vh" className='z-10 w-full absolute hidden md:block' viewBox="0 0 1920 689" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-4.99989 342.621C-4.99989 227.27 -4.94629 111.919 -4.83911 -2.62937L-4.83911 -3.7288L-2.85474 -3.7288C520.407 -4.14477 1052.52 -3.99618 1567.09 -3.84758L1927 -3.72871L1927 -2.62928C1926.89 227.537 1926.89 457.734 1927 687.901L1927 689L1558.99 688.911C1047.1 688.762 517.78 688.614 -2.85477 689L-4.83914 689L-4.83914 687.901C-4.94631 573.322 -4.9999 457.972 -4.99989 342.621ZM-0.924072 -1.55965C-1.08497 226.824 -1.08498 458.387 -0.924102 686.801C519.067 686.415 1047.69 686.563 1558.99 686.712L1923.09 686.801C1922.98 457.348 1922.98 227.894 1923.09 -1.55957L1567.09 -1.64873C1053.16 -1.79732 521.748 -1.94592 -0.924072 -1.55965Z" fill="url(#paint0_linear_699_140)"/>
<path d="M-4.99989 342.621C-4.99989 227.27 -4.94629 111.919 -4.83911 -2.62937L-4.83911 -3.7288L-2.85474 -3.7288C520.407 -4.14477 1052.52 -3.99618 1567.09 -3.84758L1927 -3.72871L1927 -2.62928C1926.89 227.537 1926.89 457.734 1927 687.901L1927 689L1558.99 688.911C1047.1 688.762 517.78 688.614 -2.85477 689L-4.83914 689L-4.83914 687.901C-4.94631 573.322 -4.9999 457.972 -4.99989 342.621ZM-0.924072 -1.55965C-1.08497 226.824 -1.08498 458.387 -0.924102 686.801C519.067 686.415 1047.69 686.563 1558.99 686.712L1923.09 686.801C1922.98 457.348 1922.98 227.894 1923.09 -1.55957L1567.09 -1.64873C1053.16 -1.79732 521.748 -1.94592 -0.924072 -1.55965Z" fill="black" fill-opacity="0.49"/>
<path d="M106.657 322.118C106.657 207.54 109.606 99.7957 115.559 -2.77793L119.474 -2.71851C107.568 202.369 107.568 428.228 119.474 687.752L115.559 687.811C109.606 558.049 106.657 436.666 106.657 322.118Z" fill="url(#paint1_linear_699_140)"/>
<path d="M106.657 322.118C106.657 207.54 109.606 99.7957 115.559 -2.77793L119.474 -2.71851C107.568 202.369 107.568 428.228 119.474 687.752L115.559 687.811C109.606 558.049 106.657 436.666 106.657 322.118Z" fill="black" fill-opacity="0.49"/>
<path d="M233.544 50.2026C233.544 32.4632 234.295 14.7832 236.064 -2.83736L239.979 -2.7185C233.651 60.5135 240.569 125.112 247.326 187.601C252.153 232.619 257.194 279.151 257.194 324.822C257.194 324.881 257.194 324.911 257.194 324.941C257.194 380.239 252.689 436.28 248.345 490.509C243.143 555.078 237.78 621.846 240.033 687.722L236.118 687.752C233.865 621.816 239.282 555.018 244.431 490.39C248.775 436.221 253.279 380.18 253.279 324.941C253.279 324.911 253.279 324.852 253.279 324.822C253.279 279.24 248.292 232.708 243.412 187.72C238.531 142.555 233.544 96.2894 233.544 50.2026Z" fill="url(#paint2_linear_699_140)"/>
<path d="M233.544 50.2026C233.544 32.4632 234.295 14.7832 236.064 -2.83736L239.979 -2.7185C233.651 60.5135 240.569 125.112 247.326 187.601C252.153 232.619 257.194 279.151 257.194 324.822C257.194 324.881 257.194 324.911 257.194 324.941C257.194 380.239 252.689 436.28 248.345 490.509C243.143 555.078 237.78 621.846 240.033 687.722L236.118 687.752C233.865 621.816 239.282 555.018 244.431 490.39C248.775 436.221 253.279 380.18 253.279 324.941C253.279 324.911 253.279 324.852 253.279 324.822C253.279 279.24 248.292 232.708 243.412 187.72C238.531 142.555 233.544 96.2894 233.544 50.2026Z" fill="black" fill-opacity="0.49"/>
<path d="M356.57 687.752C357.535 632.721 369.816 577.69 381.722 524.502C394.11 469.144 406.874 411.914 406.874 354.744C406.874 354.388 406.874 354.001 406.874 353.645C406.713 292.522 394.003 230.955 381.668 171.407C369.923 114.534 357.75 55.7295 356.57 -2.7185L360.484 -2.74821C361.718 55.5809 373.838 114.326 385.583 171.169C397.864 230.776 410.628 292.404 410.789 353.674C410.789 354.031 410.789 354.417 410.789 354.774C410.789 412.093 397.971 469.382 385.583 524.799C373.731 577.958 361.45 632.929 360.431 687.811L356.57 687.752Z" fill="url(#paint3_linear_699_140)"/>
<path d="M356.57 687.752C357.535 632.721 369.816 577.69 381.722 524.502C394.11 469.144 406.874 411.914 406.874 354.744C406.874 354.388 406.874 354.001 406.874 353.645C406.713 292.522 394.003 230.955 381.668 171.407C369.923 114.534 357.75 55.7295 356.57 -2.7185L360.484 -2.74821C361.718 55.5809 373.838 114.326 385.583 171.169C397.864 230.776 410.628 292.404 410.789 353.674C410.789 354.031 410.789 354.417 410.789 354.774C410.789 412.093 397.971 469.382 385.583 524.799C373.731 577.958 361.45 632.929 360.431 687.811L356.57 687.752Z" fill="black" fill-opacity="0.49"/>
<path d="M477.075 687.752C481.902 640.298 502.549 594.42 522.553 550.056C544.916 500.463 567.977 449.176 568.567 395.988C569.371 322.445 545.238 248.219 521.909 176.488C502.871 117.921 483.189 57.3638 477.075 -2.68878L480.99 -2.80763C487.104 57.1261 506.732 117.595 525.77 176.102C549.099 247.921 573.179 322.326 572.482 395.988C571.892 449.414 548.724 500.82 526.36 550.561C506.41 594.836 485.817 640.596 480.99 687.841L477.075 687.752Z" fill="url(#paint4_linear_699_140)"/>
<path d="M477.075 687.752C481.902 640.298 502.549 594.42 522.553 550.056C544.916 500.463 567.977 449.176 568.567 395.988C569.371 322.445 545.238 248.219 521.909 176.488C502.871 117.921 483.189 57.3638 477.075 -2.68878L480.99 -2.80763C487.104 57.1261 506.732 117.595 525.77 176.102C549.099 247.921 573.179 322.326 572.482 395.988C571.892 449.414 548.724 500.82 526.36 550.561C506.41 594.836 485.817 640.596 480.99 687.841L477.075 687.752Z" fill="black" fill-opacity="0.49"/>
<path d="M597.634 -2.59963L601.549 -2.80763C612.221 59.4141 639.733 123.448 666.28 185.403C702.748 270.415 740.395 358.369 736.159 443.798C733.745 491.994 700.442 533.594 668.317 573.857C639.894 609.425 610.505 646.211 601.602 687.96L597.687 687.693C606.644 645.617 636.193 608.682 664.724 572.966C696.741 532.911 729.83 491.519 732.244 443.738C736.534 358.518 698.886 270.772 662.472 185.908C635.818 123.894 608.306 59.7706 597.634 -2.59963Z" fill="url(#paint5_linear_699_140)"/>
<path d="M597.634 -2.59963L601.549 -2.80763C612.221 59.4141 639.733 123.448 666.28 185.403C702.748 270.415 740.395 358.369 736.159 443.798C733.745 491.994 700.442 533.594 668.317 573.857C639.894 609.425 610.505 646.211 601.602 687.96L597.687 687.693C606.644 645.617 636.193 608.682 664.724 572.966C696.741 532.911 729.83 491.519 732.244 443.738C736.534 358.518 698.886 270.772 662.472 185.908C635.818 123.894 608.306 59.7706 597.634 -2.59963Z" fill="black" fill-opacity="0.49"/>
<path d="M718.086 685.226C718.086 642.765 761.472 613.853 803.464 585.862C844.597 558.465 887.072 530.148 891.577 488.577C901.713 394.769 850.389 293.83 800.729 196.189C767.103 130.045 732.297 61.6426 718.193 -2.54019L722.108 -2.80762C736.212 61.1969 770.964 129.54 804.536 195.595C854.251 293.414 905.735 394.532 895.545 488.696C890.987 530.98 848.03 559.594 806.52 587.258C763.081 616.2 722.054 643.537 722.054 685.137C722.054 686.029 722.054 686.95 722.108 687.841L718.193 687.901C718.086 687.009 718.086 686.118 718.086 685.226Z" fill="url(#paint6_linear_699_140)"/>
<path d="M718.086 685.226C718.086 642.765 761.472 613.853 803.464 585.862C844.597 558.465 887.072 530.148 891.577 488.577C901.713 394.769 850.389 293.83 800.729 196.189C767.103 130.045 732.297 61.6426 718.193 -2.54019L722.108 -2.80762C736.212 61.1969 770.964 129.54 804.536 195.595C854.251 293.414 905.735 394.532 895.545 488.696C890.987 530.98 848.03 559.594 806.52 587.258C763.081 616.2 722.054 643.537 722.054 685.137C722.054 686.029 722.054 686.95 722.108 687.841L718.193 687.901C718.086 687.009 718.086 686.118 718.086 685.226Z" fill="black" fill-opacity="0.49"/>
<path d="M838.484 684.127C838.484 643.656 885.785 624.282 935.767 603.809C984.034 584.019 1033.96 563.576 1040.51 522.154C1050.48 459.309 1009.72 386.33 973.791 321.969C961.992 300.813 950.784 280.815 941.667 261.739C901.927 179.163 861.276 90.7329 838.645 -2.48076L842.559 -2.7779C865.191 90.2872 905.789 178.657 945.474 261.144C954.645 280.161 965.746 300.129 977.598 321.286C1013.64 385.855 1054.5 459.041 1044.47 522.303C1037.72 564.735 987.091 585.475 938.127 605.533C887.447 626.303 839.503 645.914 842.559 687.841L838.645 687.93C838.537 686.653 838.484 685.375 838.484 684.127Z" fill="url(#paint7_linear_699_140)"/>
<path d="M838.484 684.127C838.484 643.656 885.785 624.282 935.767 603.809C984.034 584.019 1033.96 563.576 1040.51 522.154C1050.48 459.309 1009.72 386.33 973.791 321.969C961.992 300.813 950.784 280.815 941.667 261.739C901.927 179.163 861.276 90.7329 838.645 -2.48076L842.559 -2.7779C865.191 90.2872 905.789 178.657 945.474 261.144C954.645 280.161 965.746 300.129 977.598 321.286C1013.64 385.855 1054.5 459.041 1044.47 522.303C1037.72 564.735 987.091 585.475 938.127 605.533C887.447 626.303 839.503 645.914 842.559 687.841L838.645 687.93C838.537 686.653 838.484 685.375 838.484 684.127Z" fill="black" fill-opacity="0.49"/>
<path d="M958.56 680.71C958.56 642.438 1007.63 627.254 1059.44 611.238C1111.67 595.073 1165.73 578.374 1172.92 536.09C1183.91 471.67 1140.26 396.255 1101.7 329.754C1089.2 308.182 1077.4 287.828 1067.8 268.513C1023.13 179.044 981.192 90.9706 959.15 -2.51047L963.065 -2.7779C985.053 90.5546 1026.94 178.539 1071.61 267.949C1081.21 287.204 1093.01 307.558 1105.5 329.101C1144.12 395.809 1187.93 471.432 1176.89 536.298C1169.48 579.741 1114.57 596.707 1061.42 613.139C1007.63 629.78 956.844 645.498 963.118 687.782L959.203 687.96C958.721 685.464 958.56 683.027 958.56 680.71Z" fill="url(#paint8_linear_699_140)"/>
<path d="M958.56 680.71C958.56 642.438 1007.63 627.254 1059.44 611.238C1111.67 595.073 1165.73 578.374 1172.92 536.09C1183.91 471.67 1140.26 396.255 1101.7 329.754C1089.2 308.182 1077.4 287.828 1067.8 268.513C1023.13 179.044 981.192 90.9706 959.15 -2.51047L963.065 -2.7779C985.053 90.5546 1026.94 178.539 1071.61 267.949C1081.21 287.204 1093.01 307.558 1105.5 329.101C1144.12 395.809 1187.93 471.432 1176.89 536.298C1169.48 579.741 1114.57 596.707 1061.42 613.139C1007.63 629.78 956.844 645.498 963.118 687.782L959.203 687.96C958.721 685.464 958.56 683.027 958.56 680.71Z" fill="black" fill-opacity="0.49"/>
<path d="M1079.49 684.543C1079.49 644.31 1127.06 625.887 1177.37 606.424C1226.01 587.585 1276.31 568.122 1283.23 526.879C1293.74 463.974 1252.56 390.282 1216.2 325.297C1204.18 303.814 1192.81 283.549 1183.59 264.294C1143.64 181.005 1102.66 91.8323 1079.66 -2.45104L1083.52 -2.77789C1106.52 91.3866 1147.44 180.5 1187.34 263.7C1196.57 282.925 1207.88 303.16 1219.9 324.614C1256.36 389.777 1297.71 463.647 1287.09 527.057C1280.01 569.281 1228.96 589.041 1179.57 608.177C1128.78 627.848 1080.67 646.39 1083.46 687.841L1079.55 687.93C1079.55 686.801 1079.49 685.642 1079.49 684.543Z" fill="url(#paint9_linear_699_140)"/>
<path d="M1079.49 684.543C1079.49 644.31 1127.06 625.887 1177.37 606.424C1226.01 587.585 1276.31 568.122 1283.23 526.879C1293.74 463.974 1252.56 390.282 1216.2 325.297C1204.18 303.814 1192.81 283.549 1183.59 264.294C1143.64 181.005 1102.66 91.8323 1079.66 -2.45104L1083.52 -2.77789C1106.52 91.3866 1147.44 180.5 1187.34 263.7C1196.57 282.925 1207.88 303.16 1219.9 324.614C1256.36 389.777 1297.71 463.647 1287.09 527.057C1280.01 569.281 1228.96 589.041 1179.57 608.177C1128.78 627.848 1080.67 646.39 1083.46 687.841L1079.55 687.93C1079.55 686.801 1079.49 685.642 1079.49 684.543Z" fill="black" fill-opacity="0.49"/>
<path d="M1200.11 686.326C1200.11 645.171 1244.73 619.498 1287.95 594.687C1330.32 570.351 1374.08 545.183 1379.44 504.89C1392.31 408.289 1337.88 302.18 1285.22 199.547C1250.57 131.976 1214.75 62.0884 1200.16 -2.48074L1204.08 -2.74817C1218.61 61.6427 1254.38 131.441 1289.02 198.952C1341.74 301.764 1396.28 408.052 1383.36 505.069C1377.89 546.134 1333.59 571.599 1290.79 596.202C1246.23 621.846 1204.08 646.063 1204.08 686.296C1204.08 686.831 1204.08 687.366 1204.08 687.901L1200.16 687.93C1200.11 687.395 1200.11 686.861 1200.11 686.326Z" fill="url(#paint10_linear_699_140)"/>
<path d="M1200.11 686.326C1200.11 645.171 1244.73 619.498 1287.95 594.687C1330.32 570.351 1374.08 545.183 1379.44 504.89C1392.31 408.289 1337.88 302.18 1285.22 199.547C1250.57 131.976 1214.75 62.0884 1200.16 -2.48074L1204.08 -2.74817C1218.61 61.6427 1254.38 131.441 1289.02 198.952C1341.74 301.764 1396.28 408.052 1383.36 505.069C1377.89 546.134 1333.59 571.599 1290.79 596.202C1246.23 621.846 1204.08 646.063 1204.08 686.296C1204.08 686.831 1204.08 687.366 1204.08 687.901L1200.16 687.93C1200.11 687.395 1200.11 686.861 1200.11 686.326Z" fill="black" fill-opacity="0.49"/>
<path d="M1320.61 686.801C1320.61 644.429 1357.35 611 1392.85 578.641C1427.17 547.412 1462.62 515.082 1466.16 474.374C1473.99 382.765 1431.46 286.015 1390.28 192.504C1361.85 127.935 1332.46 61.1672 1320.61 -2.51045L1324.53 -2.71845C1336.38 60.8107 1365.71 127.489 1394.08 191.999C1435.33 285.688 1477.96 382.587 1470.08 474.493C1466.54 515.766 1430.77 548.333 1396.23 579.8C1359.39 613.348 1324.53 645.082 1324.53 686.801C1324.53 687.187 1324.53 687.544 1324.53 687.93L1320.61 687.96C1320.61 687.544 1320.61 687.158 1320.61 686.801Z" fill="url(#paint11_linear_699_140)"/>
<path d="M1320.61 686.801C1320.61 644.429 1357.35 611 1392.85 578.641C1427.17 547.412 1462.62 515.082 1466.16 474.374C1473.99 382.765 1431.46 286.015 1390.28 192.504C1361.85 127.935 1332.46 61.1672 1320.61 -2.51045L1324.53 -2.71845C1336.38 60.8107 1365.71 127.489 1394.08 191.999C1435.33 285.688 1477.96 382.587 1470.08 474.493C1466.54 515.766 1430.77 548.333 1396.23 579.8C1359.39 613.348 1324.53 645.082 1324.53 686.801C1324.53 687.187 1324.53 687.544 1324.53 687.93L1320.61 687.96C1320.61 687.544 1320.61 687.158 1320.61 686.801Z" fill="black" fill-opacity="0.49"/>
<path d="M1441.06 685.731C1441.06 641.041 1468.25 600.154 1494.53 560.575C1520.01 522.273 1546.28 482.664 1548.16 439.549C1551.75 355.339 1521.88 269.108 1492.98 185.7C1471.53 123.864 1449.38 59.9192 1441.12 -2.54016L1445.03 -2.68873C1453.29 59.6815 1475.44 123.537 1496.84 185.313C1525.8 268.84 1555.67 355.16 1552.13 439.638C1550.25 483.11 1523.81 522.897 1498.29 561.377C1472.12 600.778 1445.03 641.487 1445.03 685.791C1445.03 686.504 1445.03 687.217 1445.03 687.93L1441.12 687.96C1441.06 687.187 1441.06 686.445 1441.06 685.731Z" fill="url(#paint12_linear_699_140)"/>
<path d="M1441.06 685.731C1441.06 641.041 1468.25 600.154 1494.53 560.575C1520.01 522.273 1546.28 482.664 1548.16 439.549C1551.75 355.339 1521.88 269.108 1492.98 185.7C1471.53 123.864 1449.38 59.9192 1441.12 -2.54016L1445.03 -2.68873C1453.29 59.6815 1475.44 123.537 1496.84 185.313C1525.8 268.84 1555.67 355.16 1552.13 439.638C1550.25 483.11 1523.81 522.897 1498.29 561.377C1472.12 600.778 1445.03 641.487 1445.03 685.791C1445.03 686.504 1445.03 687.217 1445.03 687.93L1441.12 687.96C1441.06 687.187 1441.06 686.445 1441.06 685.731Z" fill="black" fill-opacity="0.49"/>
<path d="M1561.57 -2.6293L1565.48 -2.71844C1569.83 58.3444 1584.74 120.239 1599.16 180.054C1616.86 253.537 1635.1 329.487 1634.08 404.694C1633.33 455.743 1616.11 505.96 1599.43 554.543C1584.58 597.837 1569.18 642.616 1565.48 687.901L1561.57 687.812C1565.27 642.378 1580.66 597.51 1595.57 554.157C1612.2 505.663 1629.41 455.535 1630.16 404.694C1631.18 329.725 1613 253.775 1595.3 180.381C1580.82 120.477 1565.91 58.5524 1561.57 -2.6293Z" fill="url(#paint13_linear_699_140)"/>
<path d="M1561.57 -2.6293L1565.48 -2.71844C1569.83 58.3444 1584.74 120.239 1599.16 180.054C1616.86 253.537 1635.1 329.487 1634.08 404.694C1633.33 455.743 1616.11 505.96 1599.43 554.543C1584.58 597.837 1569.18 642.616 1565.48 687.901L1561.57 687.812C1565.27 642.378 1580.66 597.51 1595.57 554.157C1612.2 505.663 1629.41 455.535 1630.16 404.694C1631.18 329.725 1613 253.775 1595.3 180.381C1580.82 120.477 1565.91 58.5524 1561.57 -2.6293Z" fill="black" fill-opacity="0.49"/>
<path d="M1682.02 687.841C1682.88 636.465 1691.25 584.644 1699.4 534.545C1707.87 482.1 1716.67 427.841 1716.83 374.058C1716.83 373.494 1716.83 372.929 1716.83 372.365C1716.83 307.707 1707.98 242.246 1699.4 178.925C1691.35 119.496 1683.04 58.0472 1682.07 -2.68872L1685.99 -2.71844C1686.95 57.9284 1695.27 119.348 1703.31 178.747C1711.89 242.097 1720.74 307.617 1720.74 372.335C1720.74 372.9 1720.74 373.464 1720.74 374.029C1720.63 427.901 1711.84 482.189 1703.31 534.694C1695.21 584.762 1686.85 636.525 1685.99 687.812L1682.02 687.841Z" fill="url(#paint14_linear_699_140)"/>
<path d="M1682.02 687.841C1682.88 636.465 1691.25 584.644 1699.4 534.545C1707.87 482.1 1716.67 427.841 1716.83 374.058C1716.83 373.494 1716.83 372.929 1716.83 372.365C1716.83 307.707 1707.98 242.246 1699.4 178.925C1691.35 119.496 1683.04 58.0472 1682.07 -2.68872L1685.99 -2.71844C1686.95 57.9284 1695.27 119.348 1703.31 178.747C1711.89 242.097 1720.74 307.617 1720.74 372.335C1720.74 372.9 1720.74 373.464 1720.74 374.029C1720.63 427.901 1711.84 482.189 1703.31 534.694C1695.21 584.762 1686.85 636.525 1685.99 687.812L1682.02 687.841Z" fill="black" fill-opacity="0.49"/>
<path d="M1800.17 340.422C1800.17 225.071 1800.97 110.434 1802.53 -2.68872L1806.44 -2.659C1803.28 223.526 1803.28 455.862 1806.44 687.871L1802.53 687.901C1800.92 571.866 1800.17 455.773 1800.17 340.422Z" fill="url(#paint15_linear_699_140)"/>
<path d="M1800.17 340.422C1800.17 225.071 1800.97 110.434 1802.53 -2.68872L1806.44 -2.659C1803.28 223.526 1803.28 455.862 1806.44 687.871L1802.53 687.901C1800.92 571.866 1800.17 455.773 1800.17 340.422Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.12295 643.567C202.385 633.999 410.789 639.942 612.382 645.677C729.938 649.005 851.462 652.481 971.216 652.838C1121.75 653.283 1274.6 650.639 1422.51 648.113C1587.15 645.261 1757.37 642.349 1925.02 643.656L1924.96 645.825C1757.42 644.518 1587.2 647.46 1422.62 650.282C1274.71 652.838 1121.81 655.482 971.216 655.007C851.355 654.65 729.777 651.203 612.221 647.846C410.789 642.111 202.492 636.198 -2.74746 645.736L-3.12295 643.567Z" fill="url(#paint16_linear_699_140)"/>
<path d="M-3.12295 643.567C202.385 633.999 410.789 639.942 612.382 645.677C729.938 649.005 851.462 652.481 971.216 652.838C1121.75 653.283 1274.6 650.639 1422.51 648.113C1587.15 645.261 1757.37 642.349 1925.02 643.656L1924.96 645.825C1757.42 644.518 1587.2 647.46 1422.62 650.282C1274.71 652.838 1121.81 655.482 971.216 655.007C851.355 654.65 729.777 651.203 612.221 647.846C410.789 642.111 202.492 636.198 -2.74746 645.736L-3.12295 643.567Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.23025 600.362C200.133 584.049 403.817 598.371 600.744 612.218C729.562 621.281 862.831 630.641 995.296 631.444C1153.66 632.394 1313.37 624.074 1467.88 615.992C1617.29 608.207 1771.8 600.125 1925.02 600.452L1925.02 602.621C1772.01 602.294 1617.56 610.346 1468.25 618.132C1313.64 626.214 1153.82 634.534 995.242 633.583C862.509 632.781 729.187 623.391 600.262 614.328C403.603 600.511 200.186 586.218 -2.64029 602.472L-3.23025 600.362Z" fill="url(#paint17_linear_699_140)"/>
<path d="M-3.23025 600.362C200.133 584.049 403.817 598.371 600.744 612.218C729.562 621.281 862.831 630.641 995.296 631.444C1153.66 632.394 1313.37 624.074 1467.88 615.992C1617.29 608.207 1771.8 600.125 1925.02 600.452L1925.02 602.621C1772.01 602.294 1617.56 610.346 1468.25 618.132C1313.64 626.214 1153.82 634.534 995.242 633.583C862.509 632.781 729.187 623.391 600.262 614.328C403.603 600.511 200.186 586.218 -2.64029 602.472L-3.23025 600.362Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.33743 557.158C204.691 535.823 406.23 560.397 601.173 584.138C740.127 601.075 883.854 618.577 1029.99 619.706C1189.27 620.925 1347.53 604.433 1500.65 588.506C1638.69 574.125 1781.4 559.268 1924.96 557.306L1925.07 559.476C1781.83 561.407 1639.28 576.264 1501.4 590.646C1348.12 606.602 1189.65 623.124 1029.99 621.905C883.425 620.776 739.537 603.245 600.369 586.278C405.801 562.566 204.637 538.051 -2.53311 559.297L-3.33743 557.158Z" fill="url(#paint18_linear_699_140)"/>
<path d="M-3.33743 557.158C204.691 535.823 406.23 560.397 601.173 584.138C740.127 601.075 883.854 618.577 1029.99 619.706C1189.27 620.925 1347.53 604.433 1500.65 588.506C1638.69 574.125 1781.4 559.268 1924.96 557.306L1925.07 559.476C1781.83 561.407 1639.28 576.264 1501.4 590.646C1348.12 606.602 1189.65 623.124 1029.99 621.905C883.425 620.776 739.537 603.245 600.369 586.278C405.801 562.566 204.637 538.051 -2.53311 559.297L-3.33743 557.158Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.39114 513.953C213.915 488.042 415.776 523.818 610.988 558.376C758.147 584.435 910.293 611.416 1069.79 612.515C1226.76 613.615 1378.91 587.942 1526.01 563.101C1654.83 541.38 1787.99 518.916 1924.91 514.132L1925.18 516.301C1788.69 521.055 1655.74 543.489 1527.19 565.181C1379.77 590.051 1227.3 615.784 1069.73 614.685C909.65 613.585 757.235 586.575 609.808 560.456C415.133 525.958 213.754 490.301 -2.5331 516.063L-3.39114 513.953Z" fill="url(#paint19_linear_699_140)"/>
<path d="M-3.39114 513.953C213.915 488.042 415.776 523.818 610.988 558.376C758.147 584.435 910.293 611.416 1069.79 612.515C1226.76 613.615 1378.91 587.942 1526.01 563.101C1654.83 541.38 1787.99 518.916 1924.91 514.132L1925.18 516.301C1788.69 521.055 1655.74 543.489 1527.19 565.181C1379.77 590.051 1227.3 615.784 1069.73 614.685C909.65 613.585 757.235 586.575 609.808 560.456C415.133 525.958 213.754 490.301 -2.5331 516.063L-3.39114 513.953Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.4446 470.778C225.392 439.757 429.184 486.913 626.272 532.495C779.652 567.974 938.288 604.671 1109.42 605.325C1263.5 605.919 1407.22 571.302 1546.23 537.814C1667.06 508.724 1792.01 478.623 1924.8 471.016L1925.23 473.185C1793.09 480.762 1668.4 510.774 1547.84 539.805C1408.46 573.382 1264.3 608.088 1109.42 607.494C937.483 606.84 778.526 570.054 624.77 534.486C428.272 489.023 225.07 442.015 -2.47939 472.888L-3.4446 470.778Z" fill="url(#paint20_linear_699_140)"/>
<path d="M-3.4446 470.778C225.392 439.757 429.184 486.913 626.272 532.495C779.652 567.974 938.288 604.671 1109.42 605.325C1263.5 605.919 1407.22 571.302 1546.23 537.814C1667.06 508.724 1792.01 478.623 1924.8 471.016L1925.23 473.185C1793.09 480.762 1668.4 510.774 1547.84 539.805C1408.46 573.382 1264.3 608.088 1109.42 607.494C937.483 606.84 778.526 570.054 624.77 534.486C428.272 489.023 225.07 442.015 -2.47939 472.888L-3.4446 470.778Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.55202 427.574C236.493 389.807 443.61 447.75 643.916 503.791C801.426 547.857 964.352 593.439 1144.06 593.498C1296.26 593.558 1431.04 551.304 1561.41 510.447C1675.53 474.701 1793.52 437.706 1924.8 427.841L1925.34 430.01C1794.8 439.816 1677.14 476.692 1563.39 512.349C1432.59 553.354 1297.34 595.727 1144.12 595.697C963.44 595.638 800.139 549.937 642.2 505.752C442.591 449.889 236.171 392.154 -2.37221 429.684L-3.55202 427.574Z" fill="url(#paint21_linear_699_140)"/>
<path d="M-3.55202 427.574C236.493 389.807 443.61 447.75 643.916 503.791C801.426 547.857 964.352 593.439 1144.06 593.498C1296.26 593.558 1431.04 551.304 1561.41 510.447C1675.53 474.701 1793.52 437.706 1924.8 427.841L1925.34 430.01C1794.8 439.816 1677.14 476.692 1563.39 512.349C1432.59 553.354 1297.34 595.727 1144.12 595.697C963.44 595.638 800.139 549.937 642.2 505.752C442.591 449.889 236.171 392.154 -2.37221 429.684L-3.55202 427.574Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.6592 384.399C244.538 337.153 456.16 404.456 660.863 469.53C820.303 520.223 985.214 572.669 1168.52 572.52C1320.61 572.401 1447.34 524.858 1569.88 478.89C1679.02 437.944 1791.85 395.631 1924.75 384.696L1925.34 386.865C1793.36 397.711 1680.89 439.905 1572.13 480.703C1449.05 526.849 1321.85 574.6 1168.57 574.719C984.195 574.868 818.855 522.273 658.932 471.432C455.033 406.596 244.162 339.53 -2.3185 386.449L-3.6592 384.399Z" fill="url(#paint22_linear_699_140)"/>
<path d="M-3.6592 384.399C244.538 337.153 456.16 404.456 660.863 469.53C820.303 520.223 985.214 572.669 1168.52 572.52C1320.61 572.401 1447.34 524.858 1569.88 478.89C1679.02 437.944 1791.85 395.631 1924.75 384.696L1925.34 386.865C1793.36 397.711 1680.89 439.905 1572.13 480.703C1449.05 526.849 1321.85 574.6 1168.57 574.719C984.195 574.868 818.855 522.273 658.932 471.432C455.033 406.596 244.162 339.53 -2.3185 386.449L-3.6592 384.399Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.82008 341.194C107.997 314.095 223.086 311.748 348.042 333.974C459.431 353.793 568.781 390.996 674.538 426.98C833.711 481.149 998.299 537.16 1177.85 537.784C1331.61 538.319 1447.23 490.895 1569.61 440.678C1676.44 396.849 1786.92 351.505 1924.8 341.551L1925.28 343.72C1788.42 353.615 1678.37 398.781 1571.92 442.461C1454.42 490.687 1332.89 540.518 1177.8 539.983C997.119 539.359 832.048 483.169 672.447 428.852C452.566 354.001 244.86 283.341 -2.26479 343.215L-3.82008 341.194Z" fill="url(#paint23_linear_699_140)"/>
<path d="M-3.82008 341.194C107.997 314.095 223.086 311.748 348.042 333.974C459.431 353.793 568.781 390.996 674.538 426.98C833.711 481.149 998.299 537.16 1177.85 537.784C1331.61 538.319 1447.23 490.895 1569.61 440.678C1676.44 396.849 1786.92 351.505 1924.8 341.551L1925.28 343.72C1788.42 353.615 1678.37 398.781 1571.92 442.461C1454.42 490.687 1332.89 540.518 1177.8 539.983C997.119 539.359 832.048 483.169 672.447 428.852C452.566 354.001 244.86 283.341 -2.26479 343.215L-3.82008 341.194Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.65919 298.079C244.538 250.833 456.16 318.136 660.863 383.21C820.303 433.903 985.214 486.349 1168.52 486.2C1320.61 486.081 1447.34 438.538 1569.88 392.571C1679.02 351.624 1791.85 309.311 1924.75 298.376L1925.34 300.545C1793.36 311.391 1680.89 353.585 1572.13 394.383C1449.05 440.559 1321.85 488.28 1168.57 488.399C984.195 488.548 818.855 435.953 658.932 385.112C455.033 320.276 244.162 253.21 -2.31849 300.129L-3.65919 298.079Z" fill="url(#paint24_linear_699_140)"/>
<path d="M-3.65919 298.079C244.538 250.833 456.16 318.136 660.863 383.21C820.303 433.903 985.214 486.349 1168.52 486.2C1320.61 486.081 1447.34 438.538 1569.88 392.571C1679.02 351.624 1791.85 309.311 1924.75 298.376L1925.34 300.545C1793.36 311.391 1680.89 353.585 1572.13 394.383C1449.05 440.559 1321.85 488.28 1168.57 488.399C984.195 488.548 818.855 435.953 658.932 385.112C455.033 320.276 244.162 253.21 -2.31849 300.129L-3.65919 298.079Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.55201 254.964C236.493 217.197 443.61 275.14 643.916 331.181C801.426 375.247 964.352 420.829 1144.06 420.888C1296.26 420.948 1431.04 378.694 1561.41 337.837C1675.53 302.091 1793.52 265.096 1924.8 255.231L1925.34 257.4C1794.8 267.206 1677.14 304.081 1563.39 339.739C1432.59 380.744 1297.34 423.117 1144.12 423.087C963.44 423.028 800.139 377.327 642.2 333.142C442.591 277.279 236.171 219.544 -2.3722 257.073L-3.55201 254.964Z" fill="url(#paint25_linear_699_140)"/>
<path d="M-3.55201 254.964C236.493 217.197 443.61 275.14 643.916 331.181C801.426 375.247 964.352 420.829 1144.06 420.888C1296.26 420.948 1431.04 378.694 1561.41 337.837C1675.53 302.091 1793.52 265.096 1924.8 255.231L1925.34 257.4C1794.8 267.206 1677.14 304.081 1563.39 339.739C1432.59 380.744 1297.34 423.117 1144.12 423.087C963.44 423.028 800.139 377.327 642.2 333.142C442.591 277.279 236.171 219.544 -2.3722 257.073L-3.55201 254.964Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.44459 211.819C225.392 180.797 429.184 227.953 626.272 273.535C779.652 309.014 938.288 345.711 1109.42 346.365C1263.5 346.959 1407.22 312.342 1546.28 278.854C1667.11 249.764 1792.07 219.663 1924.85 212.056L1925.28 214.225C1793.14 221.803 1668.45 251.814 1547.89 280.875C1408.51 314.452 1264.35 349.158 1109.47 348.564C937.537 347.91 778.579 311.124 624.824 275.556C428.326 230.093 225.124 183.085 -2.42567 213.958L-3.44459 211.819Z" fill="url(#paint26_linear_699_140)"/>
<path d="M-3.44459 211.819C225.392 180.797 429.184 227.953 626.272 273.535C779.652 309.014 938.288 345.711 1109.42 346.365C1263.5 346.959 1407.22 312.342 1546.28 278.854C1667.11 249.764 1792.07 219.663 1924.85 212.056L1925.28 214.225C1793.14 221.803 1668.45 251.814 1547.89 280.875C1408.51 314.452 1264.35 349.158 1109.47 348.564C937.537 347.91 778.579 311.124 624.824 275.556C428.326 230.093 225.124 183.085 -2.42567 213.958L-3.44459 211.819Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.39112 168.703C213.915 142.792 415.776 178.568 610.988 213.126C758.147 239.185 910.293 266.166 1069.73 267.265C1226.65 268.365 1378.8 242.692 1525.96 217.851C1654.78 196.159 1787.94 173.665 1924.91 168.881L1925.18 171.051C1788.69 175.835 1655.74 198.239 1527.14 219.931C1379.71 244.801 1227.24 270.504 1069.73 269.435C909.703 268.335 757.235 241.325 609.808 215.206C415.079 180.708 213.754 145.051 -2.53309 170.813L-3.39112 168.703Z" fill="url(#paint27_linear_699_140)"/>
<path d="M-3.39112 168.703C213.915 142.792 415.776 178.568 610.988 213.126C758.147 239.185 910.293 266.166 1069.73 267.265C1226.65 268.365 1378.8 242.692 1525.96 217.851C1654.78 196.159 1787.94 173.665 1924.91 168.881L1925.18 171.051C1788.69 175.835 1655.74 198.239 1527.14 219.931C1379.71 244.801 1227.24 270.504 1069.73 269.435C909.703 268.335 757.235 241.325 609.808 215.206C415.079 180.708 213.754 145.051 -2.53309 170.813L-3.39112 168.703Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.33741 125.588C204.691 104.253 406.23 128.827 601.173 152.568C740.127 169.505 883.854 187.007 1029.99 188.136C1189.27 189.355 1347.53 172.863 1500.65 156.936C1638.69 142.555 1781.4 127.698 1924.96 125.736L1925.07 127.906C1781.83 129.837 1639.28 144.694 1501.4 159.076C1348.12 175.032 1189.65 191.553 1029.99 190.335C883.425 189.206 739.537 171.675 600.369 154.708C405.802 130.996 204.637 106.481 -2.53309 127.727L-3.33741 125.588Z" fill="url(#paint28_linear_699_140)"/>
<path d="M-3.33741 125.588C204.691 104.253 406.23 128.827 601.173 152.568C740.127 169.505 883.854 187.007 1029.99 188.136C1189.27 189.355 1347.53 172.863 1500.65 156.936C1638.69 142.555 1781.4 127.698 1924.96 125.736L1925.07 127.906C1781.83 129.837 1639.28 144.694 1501.4 159.076C1348.12 175.032 1189.65 191.553 1029.99 190.335C883.425 189.206 739.537 171.675 600.369 154.708C405.802 130.996 204.637 106.481 -2.53309 127.727L-3.33741 125.588Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.23023 82.4723C200.133 66.1592 403.817 80.4815 600.744 94.3283C729.562 103.391 862.831 112.751 995.296 113.553C1153.66 114.504 1313.37 106.184 1467.88 98.1021C1617.29 90.3169 1771.8 82.2347 1925.02 82.5615L1925.02 84.7307C1772.01 84.4038 1617.56 92.4564 1468.25 100.241C1313.64 108.324 1153.82 116.673 995.242 115.693C862.51 114.891 729.187 105.501 600.262 96.438C403.603 82.6209 200.186 68.3283 -2.64026 84.582L-3.23023 82.4723Z" fill="url(#paint29_linear_699_140)"/>
<path d="M-3.23023 82.4723C200.133 66.1592 403.817 80.4815 600.744 94.3283C729.562 103.391 862.831 112.751 995.296 113.553C1153.66 114.504 1313.37 106.184 1467.88 98.1021C1617.29 90.3169 1771.8 82.2347 1925.02 82.5615L1925.02 84.7307C1772.01 84.4038 1617.56 92.4564 1468.25 100.241C1313.64 108.324 1153.82 116.673 995.242 115.693C862.51 114.891 729.187 105.501 600.262 96.438C403.603 82.6209 200.186 68.3283 -2.64026 84.582L-3.23023 82.4723Z" fill="black" fill-opacity="0.49"/>
<path d="M-3.12293 39.3569C202.385 29.7889 410.843 35.7318 612.436 41.4666C729.938 44.7946 851.462 48.2712 971.216 48.6278C1121.7 49.0735 1274.54 46.4289 1422.4 43.8735C1587.04 41.021 1757.32 38.0793 1924.96 39.4164L1924.91 41.5855C1757.32 40.2781 1587.1 43.2198 1422.51 46.0427C1274.65 48.5981 1121.75 51.2427 971.163 50.7969C851.301 50.4404 729.777 46.9638 612.167 43.6358C410.682 37.9009 202.385 31.9878 -2.85474 41.526L-3.12293 39.3569Z" fill="url(#paint30_linear_699_140)"/>
<path d="M-3.12293 39.3569C202.385 29.7889 410.843 35.7318 612.436 41.4666C729.938 44.7946 851.462 48.2712 971.216 48.6278C1121.7 49.0735 1274.54 46.4289 1422.4 43.8735C1587.04 41.021 1757.32 38.0793 1924.96 39.4164L1924.91 41.5855C1757.32 40.2781 1587.1 43.2198 1422.51 46.0427C1274.65 48.5981 1121.75 51.2427 971.163 50.7969C851.301 50.4404 729.777 46.9638 612.167 43.6358C410.682 37.9009 202.385 31.9878 -2.85474 41.526L-3.12293 39.3569Z" fill="black" fill-opacity="0.49"/>
<defs>
<linearGradient id="paint0_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint1_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint2_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint3_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint4_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint5_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint6_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint7_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint8_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint9_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint10_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint11_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint12_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint13_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint14_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint15_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint16_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint17_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint18_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint19_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint20_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint21_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint22_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint23_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint24_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint25_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint26_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint27_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint28_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint29_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
<linearGradient id="paint30_linear_699_140" x1="1927" y1="342.5" x2="-5.00002" y2="342.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#D000E7"/>
<stop offset="1" stop-color="#6100F8"/>
</linearGradient>
</defs>
</svg>

      <Navbar/>
      <Banner/>
      </div>
      <div className='md:px-20 lg:px-10 xl:px-16'>
      <About/>
      <Services/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
