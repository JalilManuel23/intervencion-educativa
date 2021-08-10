import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

export const Carta = (
		{ 
			info,
			estaSiendoComparada,
			seleccionarCarta,
			fueAdivinada,
		}
	) => {

	let { data, img } = info;

	return (
		<div onClick={ seleccionarCarta }>
			<ReactCardFlip isFlipped={ estaSiendoComparada || fueAdivinada } flipDirection="vertical">
				<div className="carta"></div>
			

				<div
					className="carta"
				>
					<div className="info d-flex flex-column justify-content-center align-items-center">
						{data}
						<img src={img} className="img-carta" alt={data} />
					</div>
				</div>
			</ReactCardFlip>
		</div>
	);
}