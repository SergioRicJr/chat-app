import * as React from "react";
import type { SVGProps } from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 177 44"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
        <path d="M72.5501 34.252C70.2821 34.252 68.5301 33.676 67.2941 32.524C66.0701 31.372 65.4581 29.53 65.4581 26.998C65.4581 22.162 67.8101 19.744 72.5141 19.744C73.6541 19.744 74.7101 19.882 75.6821 20.158C76.6661 20.434 77.3981 20.74 77.8781 21.076V25.576H73.5581V24.28C73.5581 23.824 73.4561 23.488 73.2521 23.272C73.0481 23.056 72.7421 22.948 72.3341 22.948C71.9261 22.948 71.6201 23.056 71.4161 23.272C71.2121 23.488 71.1101 23.824 71.1101 24.28V29.716C71.1101 30.172 71.2121 30.508 71.4161 30.724C71.6201 30.94 71.9261 31.048 72.3341 31.048C72.7421 31.048 73.0481 30.94 73.2521 30.724C73.4561 30.508 73.5581 30.172 73.5581 29.716V28.258H77.8781V32.92C77.3861 33.256 76.6541 33.562 75.6821 33.838C74.7221 34.114 73.6781 34.252 72.5501 34.252ZM90.4723 31.048V34H84.7843V31.048H85.5403V28.096C85.5403 27.7 85.4563 27.412 85.2883 27.232C85.1203 27.04 84.8683 26.944 84.5323 26.944C83.8123 26.944 83.4523 27.328 83.4523 28.096V31.048H84.2083V34H78.5203V31.048H79.3123V22.948H78.5203V19.996H83.4523V25.396C83.8963 24.844 84.3763 24.43 84.8923 24.154C85.4083 23.878 86.0083 23.74 86.6923 23.74C87.6883 23.74 88.4323 24.052 88.9243 24.676C89.4283 25.3 89.6803 26.158 89.6803 27.25V31.048H90.4723ZM101.547 31.048V34H96.7955V32.776C96.5315 33.16 96.1595 33.502 95.6795 33.802C95.2115 34.102 94.6355 34.252 93.9515 34.252C93.0515 34.252 92.3435 34.012 91.8275 33.532C91.3115 33.052 91.0535 32.374 91.0535 31.498C91.0535 29.23 92.9795 28.066 96.8315 28.006C96.7955 27.598 96.6395 27.322 96.3635 27.178C96.0875 27.022 95.6195 26.944 94.9595 26.944C94.4195 26.944 93.8375 27.004 93.2135 27.124C92.6015 27.232 92.0375 27.382 91.5215 27.574V24.262C92.1575 24.106 92.8475 23.98 93.5915 23.884C94.3355 23.788 95.0615 23.74 95.7695 23.74C97.5575 23.74 98.8355 24.064 99.6035 24.712C100.371 25.36 100.755 26.362 100.755 27.718V31.048H101.547ZM96.7955 29.788C96.2555 29.788 95.8355 29.86 95.5355 30.004C95.2475 30.148 95.1035 30.388 95.1035 30.724C95.1035 30.928 95.1635 31.096 95.2835 31.228C95.4155 31.348 95.5955 31.408 95.8235 31.408C96.1355 31.408 96.3755 31.276 96.5435 31.012C96.7115 30.748 96.7955 30.376 96.7955 29.896V29.788ZM106.574 34.252C105.302 34.252 104.342 33.946 103.694 33.334C103.058 32.71 102.74 31.666 102.74 30.202V26.944H101.948V23.992C102.404 23.992 102.746 23.878 102.974 23.65C103.202 23.41 103.316 23.086 103.316 22.678V21.868H107.132V23.992H109.562V26.944H107.132V29.896C107.132 30.292 107.216 30.586 107.384 30.778C107.564 30.958 107.828 31.048 108.176 31.048C108.632 31.048 109.13 30.994 109.67 30.886V33.712C109.334 33.844 108.878 33.964 108.302 34.072C107.738 34.192 107.162 34.252 106.574 34.252ZM120.743 31.048V34H115.991V32.776C115.727 33.16 115.355 33.502 114.875 33.802C114.407 34.102 113.831 34.252 113.147 34.252C112.247 34.252 111.539 34.012 111.023 33.532C110.507 33.052 110.249 32.374 110.249 31.498C110.249 29.23 112.175 28.066 116.027 28.006C115.991 27.598 115.835 27.322 115.559 27.178C115.283 27.022 114.815 26.944 114.155 26.944C113.615 26.944 113.033 27.004 112.409 27.124C111.797 27.232 111.233 27.382 110.717 27.574V24.262C111.353 24.106 112.043 23.98 112.787 23.884C113.531 23.788 114.257 23.74 114.965 23.74C116.753 23.74 118.031 24.064 118.799 24.712C119.567 25.36 119.951 26.362 119.951 27.718V31.048H120.743ZM115.991 29.788C115.451 29.788 115.031 29.86 114.731 30.004C114.443 30.148 114.299 30.388 114.299 30.724C114.299 30.928 114.359 31.096 114.479 31.228C114.611 31.348 114.791 31.408 115.019 31.408C115.331 31.408 115.571 31.276 115.739 31.012C115.907 30.748 115.991 30.376 115.991 29.896V29.788ZM121.251 35.044H122.043V26.944H121.251V23.992H126.183V25.216C126.483 24.832 126.867 24.49 127.335 24.19C127.815 23.89 128.361 23.74 128.973 23.74C130.197 23.74 131.115 24.196 131.727 25.108C132.351 26.02 132.663 27.316 132.663 28.996C132.663 30.676 132.351 31.972 131.727 32.884C131.115 33.796 130.197 34.252 128.973 34.252C128.361 34.252 127.815 34.102 127.335 33.802C126.867 33.502 126.483 33.16 126.183 32.776V35.044H127.425V37.996H121.251V35.044ZM127.227 31.048C127.575 31.048 127.833 30.958 128.001 30.778C128.181 30.586 128.271 30.292 128.271 29.896V28.096C128.271 27.7 128.181 27.412 128.001 27.232C127.833 27.04 127.575 26.944 127.227 26.944C126.879 26.944 126.615 27.04 126.435 27.232C126.267 27.412 126.183 27.7 126.183 28.096V29.896C126.183 30.292 126.267 30.586 126.435 30.778C126.615 30.958 126.879 31.048 127.227 31.048ZM133.099 35.044H133.891V26.944H133.099V23.992H138.031V25.216C138.331 24.832 138.715 24.49 139.183 24.19C139.663 23.89 140.209 23.74 140.821 23.74C142.045 23.74 142.963 24.196 143.575 25.108C144.199 26.02 144.511 27.316 144.511 28.996C144.511 30.676 144.199 31.972 143.575 32.884C142.963 33.796 142.045 34.252 140.821 34.252C140.209 34.252 139.663 34.102 139.183 33.802C138.715 33.502 138.331 33.16 138.031 32.776V35.044H139.273V37.996H133.099V35.044ZM139.075 31.048C139.423 31.048 139.681 30.958 139.849 30.778C140.029 30.586 140.119 30.292 140.119 29.896V28.096C140.119 27.7 140.029 27.412 139.849 27.232C139.681 27.04 139.423 26.944 139.075 26.944C138.727 26.944 138.463 27.04 138.283 27.232C138.115 27.412 138.031 27.7 138.031 28.096V29.896C138.031 30.292 138.115 30.586 138.283 30.778C138.463 30.958 138.727 31.048 139.075 31.048ZM145.882 30.058L145.054 20.896V19.996H150.436V20.896L149.59 30.058H145.882ZM145.702 34V31.048H149.77V34H145.702Z" fill="white"/>
        <path d="M19.6371 30.4345H18.1247V31.9469V37.2962C17.8799 37.2135 17.6153 37.1197 17.3338 37.0137C15.7229 36.4078 13.5817 35.4153 11.4488 33.8725C7.222 30.8149 3 25.5913 3 16.7172C3 9.14137 9.14141 3 16.7172 3H28.607C36.1828 3 42.3241 9.14137 42.3241 16.7172C42.3241 24.2931 36.1828 30.4345 28.607 30.4345H19.6371Z" stroke="#81E6D9" stroke-width="4.06197"/>
        <mask id="mask0_1_103" maskUnits="userSpaceOnUse" x="29" y="13" width="33" height="31">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M29.4446 29.9404C31.1473 34.616 35.6318 37.9548 40.8962 37.9548H45.3497V43.8366C45.3497 43.8366 61.9868 40.8958 61.9868 25.7711C61.9868 19.0421 56.5319 13.5873 49.803 13.5873H40.8962C40.8397 13.5873 40.7832 13.5877 40.727 13.5885C40.7829 14.1195 40.8117 14.6589 40.8117 15.2047C40.8117 22.2814 35.9852 28.2307 29.4446 29.9404Z" fill="white"/>
        </mask>
        <g mask="url(#mask0_1_103)">
        <path d="M29.4446 29.9404L28.6796 27.0138L25.4655 27.8539L26.6022 30.9755L29.4446 29.9404ZM45.3497 37.9548H48.3746V34.9299H45.3497V37.9548ZM45.3497 43.8366H42.3248V47.4431L45.8762 46.8154L45.3497 43.8366ZM40.727 13.5885L40.6857 10.5637L37.371 10.609L37.7187 13.9058L40.727 13.5885ZM26.6022 30.9755C28.726 36.8074 34.32 40.9797 40.8962 40.9797V34.9299C36.9436 34.9299 33.5685 32.4245 32.2868 28.9053L26.6022 30.9755ZM40.8962 40.9797H45.3497V34.9299H40.8962V40.9797ZM42.3248 37.9548V43.8366H48.3746V37.9548H42.3248ZM45.3497 43.8366C45.8762 46.8154 45.8775 46.8151 45.8789 46.8148C45.8795 46.8148 45.881 46.8145 45.8821 46.8144C45.8844 46.8139 45.8868 46.8135 45.8895 46.813C45.8951 46.812 45.9016 46.8109 45.909 46.8094C45.9241 46.8067 45.9432 46.8032 45.966 46.7986C46.012 46.7899 46.0736 46.7778 46.1498 46.762C46.3022 46.7304 46.5134 46.6843 46.7752 46.6209C47.2979 46.4946 48.0263 46.2992 48.8926 46.0149C50.6149 45.4494 52.9368 44.5147 55.283 43.0335C60.0218 40.0419 65.0118 34.6811 65.0118 25.7711H58.9619C58.9619 31.9857 55.6331 35.6578 52.0534 37.9178C50.2403 39.0624 48.4029 39.808 47.0057 40.2668C46.3122 40.4944 45.741 40.6468 45.3538 40.7405C45.1606 40.7872 45.0144 40.819 44.9232 40.8379C44.8775 40.8472 44.8456 40.8534 44.8287 40.8568C44.8202 40.8584 44.8153 40.8592 44.8143 40.8595C44.8138 40.8595 44.8143 40.8595 44.8158 40.8592C44.8166 40.859 44.8175 40.8589 44.8187 40.8586C44.8193 40.8586 44.8203 40.8583 44.8206 40.8583C44.8218 40.8581 44.8231 40.8578 45.3497 43.8366ZM65.0118 25.7711C65.0118 17.3715 58.2025 10.5624 49.803 10.5624V16.6122C54.8613 16.6122 58.9619 20.7128 58.9619 25.7711H65.0118ZM49.803 10.5624H40.8962V16.6122H49.803V10.5624ZM40.8962 10.5624C40.8261 10.5624 40.7559 10.5628 40.6857 10.5637L40.7681 16.6132C40.8108 16.6125 40.8534 16.6122 40.8962 16.6122V10.5624ZM37.7187 13.9058C37.7636 14.3317 37.7868 14.7651 37.7868 15.2047H43.8366C43.8366 14.5527 43.8023 13.9075 43.7351 13.2711L37.7187 13.9058ZM37.7868 15.2047C37.7868 20.8717 33.922 25.6435 28.6796 27.0138L30.2096 32.867C38.0486 30.8179 43.8366 23.691 43.8366 15.2047H37.7868Z" fill="#81E6D9"/>
        </g>
    </svg>  
);
export default SvgLogo;