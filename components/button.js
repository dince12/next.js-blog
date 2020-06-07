import Link from 'next/link'

export default function Button({actions}) {
    return (
        <div className="button coolButton">
            <style jsx> {
                `
                   body {
	                  align-items: center;
	                  background-color: #202020;
	                  background-image: radial-gradient(10% 100% ellipse at bottom center, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 100%);
	                  display: flex;
	                  height: 100vh;
	                  justify-content: center;
	                  margin: 0;
	                  padding: 0;
	                  transition: background-color 2s cubic-bezier(0.19, 1, 0.22, 1);
                   }

                   .button {
                   	border: 1px solid #9c9cb6;
                   	cursor: pointer;
                   	letter-spacing: 0.15rem;
                   	overflow: hidden;
                   	padding: 10px 30px;
                   	position: relative;
                   	text-align: center;
                   	text-transform: uppercase;
                   	transition:
                   		background 5s cubic-bezier(0.19, 1, 0.22, 1),
                   		border 1s cubic-bezier(0.19, 1, 0.22, 1),
                   		color 0.6s cubic-bezier(0.19, 1, 0.22, 1);
                   	user-select: none;
                   }

                   .button a {
                   	color: #969696;
                   	text-decoration: none;
                   }

                   .button .mask {
                   	background-color: #fff;
                   	background-color: rgba(255, 255, 255, 0.5);
                   	height: 100px;
                   	position: absolute;
                   	transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg);
                   	transition: all 2s cubic-bezier(0.19, 1, 0.22, 1);
                   	width: 200px;
                   }

                   .button:hover {
                   	background-color: rgba(255, 255, 255, 0.05);
                   	border-color: #9c9cb6;
                   	box-shadow: 0 0 5px rgba(255, 245, 245, 0.8);
                   }


                   .button:hover .mask {
                   	background-color: #9c9cb6;
                   	transform: translate3d(120%, -100px, 0) rotate3d(0, 0, 1, 90deg);
                   }

                   @media screen and (max-width: 600px) {
                        .coolButton {
                            margin-bottom: 5%;
                        }
                   }


                   body.show {
                   	background-color: #9c9cb6;
                   }
                `
            } </style>

            <a href={actions.link}>
                <span>{actions.text}</span>
            </a>
            <div className="mask"></div>
        </div>
    )
}