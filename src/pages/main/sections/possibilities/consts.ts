import type { CardItem } from './types'

import fullCycleImgSm from 'src/assets/full-cycle.png'
import fullCycleImglg from 'src/assets/full-cycle-big.png'

import drawingDevelopmentSm from 'src/assets/drawing-development.png'
import drawingDevelopmentLg from 'src/assets/drawing-development-big.png'

import supplymentSm from 'src/assets/supply.png'
import supplymentLg from 'src/assets/supply-big.png'

import fumigationSm from 'src/assets/fumigation.png'
import fumigationLg from 'src/assets/fumigation-big.png'

import modernEquipmentSm from 'src/assets/modern-equipment.png'
import modernEquipmentLg from 'src/assets/modern-equipment-big.png'

import handshakeSm from 'src/assets/handshake.png'
import handshakeLg from 'src/assets/handshake-big.png'

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
