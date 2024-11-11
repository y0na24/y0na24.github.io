import type { CardItem } from './types'

import fullCycleImgSm from 'public/full-cycle.png'
import fullCycleImglg from 'public/full-cycle-big.png'

import drawingDevelopmentSm from 'public/drawing-development.png'
import drawingDevelopmentLg from 'public/drawing-development-big.png'

import supplymentSm from 'public/supply.png'
import supplymentLg from 'public/supply-big.png'

import fumigationSm from 'public/fumigation.png'
import fumigationLg from 'public/fumigation-big.png'

import modernEquipmentSm from 'public/modern-equipment.png'
import modernEquipmentLg from 'public/modern-equipment-big.png'

import handshakeSm from 'public/handshake.png'
import handshakeLg from 'public/handshake-big.png'

export const possibilitesCards: CardItem[] = [
	{
		subtitle: 'Полный цикл производства военной и промышленной тары',
		smImgSrc: fullCycleImgSm.src,
		lgImgSrc: fullCycleImglg.src,
	},
	{
		subtitle: 'Разработка чертежей по ГОСТу и подбор материалов',
		smImgSrc: drawingDevelopmentSm.src,
		lgImgSrc: drawingDevelopmentLg.src,
	},
	{
		subtitle: 'Ведение проектов от концепции до поставки продукции заказчику',
		smImgSrc: supplymentSm.src,
		lgImgSrc: supplymentLg.src,
	},
	{
		subtitle: 'Комплексная фумигация химическими и термическими методами',
		smImgSrc: fumigationSm.src,
		lgImgSrc: fumigationLg.src,
	},
	{
		subtitle: 'Собственный парк современного оборудования',
		smImgSrc: modernEquipmentSm.src,
		lgImgSrc: modernEquipmentLg.src,
	},
	{
		subtitle: 'СМК и ОКВЭД подтверждают готовность к производству тары',
		smImgSrc: handshakeSm.src,
		lgImgSrc: handshakeLg.src,
	},
]
