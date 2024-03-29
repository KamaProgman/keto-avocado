import React from "react";
import { motion } from "framer-motion";
import icon1 from "../../assets/icons/nutrition-icon.png";
import icon2 from "../../assets/icons/nutrition-icon-2.png";
import icon3 from "../../assets/icons/nutrition-icon-3.png";
import icon4 from "../../assets/icons/nutrition-icon-4.png";
import plan from "../../assets/images/diet-plan.png";

import "./service.css";

const Service: React.FC = () => {
	return (
		<section id="course" className="service">
			<div className="service-diet">
				<div className="service__diet-content">
					<h2>Я работаю с вами над созданием индивидуального плана питания</h2>
					<p>
						Это ежедневное составление времени питания для каждого
						индивидуально, а также подробная информация о полезных и вредных
						продуктов, влияющих на вес. Более того, привлекательное и
						разнообразное питание станет ключом к вашему похудению и отказу от
						вредных привычек.
					</p>
				</div>
				<div>
					<motion.div
						initial={{ scale: 0.9, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						viewport={{ once: true }}
						className="service__diet-img"
					>
						<img src={plan} alt="план" />
					</motion.div>
				</div>
			</div>
			<div className="service-plan">
				<div className="service__plan-content">
					<div className="service__plan-item">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 1,
								delay: 0.2,
							}}
							viewport={{ once: true }}
							className="img-avocado"
						>
							<img src={icon1} />
						</motion.div>
						<h3>Коучинг по питанию</h3>
						<p>
							Руководство к здоровому образу жизни через разнообразное питание.
						</p>
					</div>
					<div className="service__plan-item">
						<motion.img
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 1,
								delay: 0.2,
							}}
							viewport={{ once: true }}
							src={icon3}
						/>
						<h3>Витамины и добавки</h3>
						<p>
							Правильный подбор всех витаминов и нутриентов необходимых для
							организма.
						</p>
					</div>
					<div className="service__plan-item">
						<motion.img
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 1,
								delay: 0.2,
							}}
							viewport={{ once: true }}
							src={icon2}
						/>
						<h3>Спортивные советы</h3>
						<p>Полезные спортивные советы и упражнения для жиро-сжигания.</p>
					</div>
					<div className="service__plan-item">
						<motion.img
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							transition={{
								duration: 1,
								delay: 0.2,
							}}
							viewport={{ once: true }}
							src={icon4}
						/>
						<h3>Похудение</h3>
						<p>Идеальное похудение, обеспечивающее максимальный комфорт.</p>
					</div>
				</div>
			</div>

			<div className="w-full absolute top-0 left-1/2 -translate-x-1/2 z-10">
				<img
					src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMHZ3IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTMyMCAyOEMxNjAgMjggODAgNDkgMCA3MFYwaDEyODB2NzBjLTgwIDIxLTE2MCA0Mi0zMjAgNDItMzIwIDAtMzIwLTg0LTY0MC04NHoiLz48L2c+PC9zdmc+"
					className="w-full h-16"
					alt=""
				/>
			</div>
		</section>
	);
};

export default Service;
