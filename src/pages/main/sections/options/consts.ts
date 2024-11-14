import type { OptionsCard } from './types'

import drumsSm from 'public/drums-sm.png'
import drumsLg from 'public/drums-768.png'
import drumsMd from 'public/drums-1440.png'

import woodenBoxSm from 'public/wooden-480.png'
import woodenBoxLg from 'public/wooden-768.png'
import woodenBoxMd from 'public/wooden-1440.png'

import woodenBox2sm from 'public/wooden-2-480.png'
import woodenBox2lg from 'public/wooden-2-768.png'
import woodenBox2md from 'public/wooden-2-1440.png'

import armyBoxSm from 'public/army-480.png'
import armyBoxLg from 'public/army-768.png'
import armyBoxMd from 'public/army-1440.png'

export const optionsCards: OptionsCard[] = [
	{
		description:
			'Мы предлагаем барабаны из фанеры и картона, сочетающие прочность с лёгкостью. Эти изделия компактны и экологичны, их можно использовать повторно.',
		smImgSrc: drumsSm.src,
		lgImgSrc: drumsLg.src,
		mdImgSrc: drumsMd.src,
		title: 'Фанерные кабельные барабаны',
		detailedDescription:
			'Мы производим барабаны различных размеров до 1500 мм, сертифицированные для экспорта, без необходимости фитосанитарной обработки.',
	},
	{
		description:
			'Компания предлагает широкий ассортимент ящиков из плитных материалов, отличающихся лёгкостью и прочностью.',
		detailedDescription:
			'Плитный материал обладает рядом преимуществ: он защищает груз от влаги, механических повреждений и ультрафиолетовых лучей, при этом ящики просты в использовании и транспортировке.',
		smImgSrc: woodenBoxSm.src,
		lgImgSrc: woodenBoxLg.src,
		mdImgSrc: woodenBoxMd.src,
		title: 'Тара из плитных материалов: фанера, OSB, МДФ',
	},
	{
		description:
			'Мы накопили обширный опыт в изготовлении деревянных ящиков, используя чертежи заказчика, соблюдая все необходимые стандарты и сроки изготовления.',
		smImgSrc: woodenBox2sm.src,
		lgImgSrc: woodenBox2lg.src,
		mdImgSrc: woodenBox2md.src,
		title: 'Производство деревянных ящиков: прочность и надёжность',
		detailedDescription:
			'Строгий контроль качества материала с момента заготовки древесины. Фумигация изделий для экспортных отгрузок строго по Гост. По требованиям заказчика, мы готовы произвести покрасочные работы любыми видами материалов. ',
	},
	{
		description:
			'Военная тара отличается высокой прочностью и устойчивостью к механическим повреждениям, поскольку она предназначена для перевозки оружия, боеприпасов и других специфических грузов.',
		smImgSrc: armyBoxSm.src,
		lgImgSrc: armyBoxLg.src,
		mdImgSrc: armyBoxMd.src,
		title: 'Военная тара',
		detailedDescription:
			'Для её производства используются только высококачественные материалы, такие как массив сосны или фанера. Конструкция дополнительно укрепляется металлическими элементами для увеличения надёжности. Изготовление военной тары и ложементов может быть стандартным, в соответствии с ГОСТом, или индивидуальным — по запросам заказчика. Большой опыт нашей компании позволяет разработать чертежи ящиков, подобрать материалы и произвести необходимую партию строго в оговоренные сроки.',
	},
]
