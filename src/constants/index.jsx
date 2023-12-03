import {
  refle,
  revi1,
  nicole6, nicole3, nicole4,
  nicole2,
  nicole1,
  kathleenbanner,
  kathleen2,
  kathleen1,
  rebekah,
  kathleen,
  nicole,
  maria,
  nadia,
  ongchen,
  college,
  coldhand,
  snowcar,
  training,
  trainingg,
  agree,
  men,
  reference,
  risk,
  onetable,
  twotable,
  threetable,
  fourtable,
  ohs,
  nadiaevaluation,
  evaluationpic,
  accident,
  awareness,
  law,
  coldrisk,
  rebekha1,
  rebekha2,
  rebekha3,
} from "../assets";
import Pdf from '/kathleen.pdf'


export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "document",
    title: "Document",
  },
  {
    id: "authors",
    title: "Authors",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Ongchen Sherpa",
    description:
      "International student from Nepal, 9th term at Acsenda School of Management, pursuing an accounting degree. Passionate about web-based projects and aspiring to contribute to the evolving digital landscape.",
    id: "2001562",
    image: ongchen,
  },
  {
    name: "Kathleen Anne Custodio",
    description:
      "Eager learner with an accounting degree, navigating a diverse culture. Overcoming introversion, worked in production and quality inspection. Now, in Vancouver, aiming for managerial growth while embracing passions for music, dance, and gaming.",
    id: "20000315",
    image: kathleen,
  },

  {
    name: "Nadia I. Luna L.",
    description:
      "Greetings! I'm Nadia, a Mexican residing in Vancouver for 6 years and currently a Business Management student at Acsenda School of Management. Excited to share my passion for Workplace Safety and Wellness on this amazing Wiki platform, fostering collective growth through knowledge sharing.",
    id: "2001981",
    image: nadia,
  },
  {
    name: "Maria Tabares",
    description:
      "Maria Jose Tabares, known as Majo, has called Canada home for four years. Studying English and pursuing a diploma at Arbutus College keeps me busy. I work with Leaf Filter, organizing marketing events, and I'm grateful for the opportunity. Hoping to graduate next year, my eyes are set on starting the process for Permanent Residency in Canada.",
    id: "20001263",
    image: maria,
  },
  {
    name: "Nicole Dizon ",
    description:
      "I hold a Bachelor's degree in IT from STI College in the Philippines and have amassed 7 years of experience as an IT engineer in a prestigious government organization. Currently graduating from Acsenda School of Management, I excel as an Area Leader at McDonald's, showcasing leadership skills and receiving accolades for excellence. My journey from the Philippines to Canada has enriched me culturally, enhancing my communication abilities and fostering a unique set of skills for connecting with diverse backgrounds.",
    id: "2199024",
    image: nicole,
  },
  {
    name: "Rebekah Gwene Bao",
    description:
      "With over a decade in global talent recruitment, I currently serve as an HR Associate at GeoRadar Group, concurrently pursuing a Business Administration degree at Acsenda School of Management. I also apply my psychology background as a support health worker, holding certifications in CPR, first aid, and food safety. My multifaceted experience in recruitment, administration, and healthcare equips me with a diverse skill set to drive organizational success.",
    id: "21100521",
    image: rebekah,
  },
];

const blogData = [
  {
    id: 3,
    title: "What is the issue important?",
    image: coldhand,
    author: "Maria",
    authorPic: maria,
    published_date: "December 1 , 2023",
    reading_time: "4 minutes",
    content: (
      <div className="text-[#bec6c7]">
        <p className="pb-4">
          The winter season poses significant challenges for individuals engaged
          in outdoor work, particularly for professions that necessitate
          exposure to extreme temperatures. Merely relying on protective
          equipment may prove insufficient due to variables such as air
          temperature, wind speed, humidity, and the level of physical activity
          involved.
        </p>
        <p className="pb-4">
          {" "}
          It is imperative that employees in such roles are equipped with
          appropriate clothing, maintain optimal nutrition, and possess
          knowledge on effectively managing cold conditions to execute their
          tasks efficiently.
        </p>
        <p className="pb-4">
          working in cold environments can have positive implications for
          cardiovascular health by introducing an enjoyable and challenging
          workout element, ensuring oxygenated blood flow is essential for
          activity compensation and maintaining a balanced body temperature.
        </p>
        <p className="pb-4">
          {" "}
          Conversely, the adverse effects must be acknowledged, as prolonged
          exposure to cold conditions may lead to health issues, with
          hypothermia or dangerous overcooling of the body being primary
          concerns. Consequently, both the employee and the employing
          organization must meticulously adhere to all prerequisites before
          engaging in work under such conditions, mitigating potential future
          challenges for both the individual and the company.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title:
      "What are the different responsibilities in this area and who should perform them?",
    image: men,
    author: "Maria",
    authorPic: maria,
    published_date: "December 1 , 2023",
    reading_time: "3 minutes",
    content: (
      <div className="text-[#bec6c7]">
        <p className="pb-4">
          Both the employee and the company bear distinct responsibilities in
          ensuring a secure work environment.{" "}
        </p>
        <p className="pb-4">
          The organization is tasked with furnishing all requisite resources to
          facilitate the task with the minimal possible risk. Simultaneously,
          the employee is obligated to adhere to specified requirements and
          meticulously follow provided instructions.
        </p>
        <p className="pb-4">
          As an illustrative example, when working in sub-zero temperatures of
          -7°C, the organization must ensure the availability and proper closure
          of heated warming shelters, including tents, cabins, and restrooms.
          Employees are strongly advised to utilize these shelters judiciously,
          with usage contingent on the severity of exposure. In scenarios where
          the ambient temperature hovers around 12°C, additional precautions
          should be incorporated. These may include regular supervision,
          adopting a deliberate and measured work pace to prevent excessive
          sweating—which leads to damp clothing—and acclimating new employees
          gradually to these conditions. These measures collectively contribute
          to fostering a safe and conducive working environment.
        </p>
      </div>
    ),
  },
  {
    id: 10,
    title: "What is the OHS Law in this area?",
    image: law,
    author: "Kathleen",
    authorPic: kathleen,
    published_date:  "December 1 , 2023",
    reading_time: "12 minutes",
    table: (
      <div>
        <img src={onetable} alt="" />
      </div>
    ),
    tabletwo: (
      <div>
        <img src={twotable} alt="" />
      </div>
    ),
    tablethree: (
      <div>
        <img src={threetable} alt="" />
      </div>
    ),
    tablefour: (
      <div>
        <img src={fourtable} alt="" />
      </div>
    ),
    restOfContent: (
      <div className="mt-4">
        <h1 className="text-orange font-bold py-4 text-3xl">
          Workers Compensation Act - Occupational Health and Safety Regulation
          Part 7 Division 4 “Cold Exposure”
        </h1>
        <img src={rebekha1} alt="img" className="w-full"/>
        <h3 className="text-orange py-4 font-bold text-xl">Cold stress assessment and exposure control plan</h3>
        <p className="py-4">
          <span className="font-bold">Section 7.34</span> states that the
          employer must perform a cold stress assessment to identify if workers
          are exposed to risk activities. Moreover, if risks are detected,
          employers must implement the requirements stipulated in section 5.54
          to create a cold exposure control plan.
        </p>
        <img src={rebekha2} alt="" className="w-full"/>
        <h4 className="font-bold text-orange py-4">Cold Stress Control</h4>
        <p>
         <span className="font-bold text-md">Section 7.35 </span> states that if workers are exposed to the conditions
          specified in section 7.33, employers must implement effective
          engineering controls to reduce the risk of exposure to levels
          specified as "low risk" and "no risk." The cold stress section of the
          ACGIH standards applies to criteria for air cooling to the exposed
          bodies of workers. Moreover, If the measures described in the latter
          are not possible, the employer must reduce the risk of exposure by
          providing:<span className="text-bold text-green-500"> (a) effective administrative control, or (b) Personal
          protective equipment (provided the equipment has the same level of
          protection as authorized).</span>
        </p>
        <h4 className="font-bold text-orange py-4">Heated Shelters</h4>
        <p>
        <span className="font-bold text-md">Section 7.36 </span>When a worker is exposed to a thermal environment with an
          equivalent cooling temperature below -7 °C (19 °F) as determined by
          wind chill strength criteria for bare flesh in the ACGIH standard for
          cold stress, close heat protection must be available to the worker
        </p>
        <h4 className="font-bold text-orange py-4">Clothing and Personal Protective Equipment</h4>
        <img src={rebekha3} alt="" className="w-full"/>
        <p className="py-4">
        <span className="font-bold text-md">Section 3.37 </span>(1) Workers subject to the conditions mentioned in clause
          7.33 must wear appropriate protective clothing and personal protective
          equipment. (2) When performing outdoor activities covered in snow or
          ice where there is a risk of eye injury from excessive ultraviolet
          rays, glare, or ice blasts, workers must wear safety glasses
          appropriate to the risk.
        </p>
        <h4 className="font-bold text-orange py-4">Removal and Treatment</h4>
        <p>
        <span className="font-bold text-md">Section 3.38 </span>If the worker develops cold symptoms or shows signs of
          cold stress or injury, the worker should avoid further exposure and,
          if possible, seek medical attention from direct first responders.
        </p>
        <h2 className="font-bold text-orange py-12 text-3xl">
          Workers Compensation Act - Occupational Health and Safety Regulation
          Part 24
        </h2>
        <p>
          Under this regulation, WCA implemented a Fishing Operations General
          Requirements that protects fishing vessel workers against cold weather
          conditions.{" "}
        </p>
        <h4 className="font-bold text-orange py-4">Protection Against Cold</h4>
        <p>
        <span className="font-bold text-md"> Section 24.96</span> Crewmembers working in freezers must wear clothing,
          including headgear, footwear, and gloves, that provides adequate
          protection against cold.
        </p>
        <h2 className="font-bold text-orange py-12 text-3xl">
          Workers Compensation Act - Occupational Health and Safety Regulation
          Part 28 Division 1 “General Conditions”
        </h2>
        <p2>
          This regulation specifies the safety of a worker when the workplace
          includes cold storage rooms. Even though this regulation only talks
          about agricultural operations one of its sections can be applied if
          cold storage rooms are available in the workplace such as in the
          fast-food industry.
        </p2>
        <h4 className="font-bold text-orange py-4">Cold Storage Rooms</h4>
        <p>
        <span className="font-bold text-md">Section 28.3</span> Cold storage rooms must have at least one door that can,
          at all times, be opened from inside the room.
        </p>
      </div>
    ),
    content: (
      <div className="text-[#bec6c7]">
        <p>
          In some provinces of Canada, the Occupational Health and Safety
          regulation addresses the challenges of working in extreme
          temperatures, particularly cold conditions and weather. The
          legislation ensures that all employers, employees, and other
          stakeholders are adhering to the legal requirements to have an
          understanding of the effects of extreme cold temperatures in the
          workplace and have knowledge of how to prevent and avoid accidents.
          Employers adhere to the American Conference of Governmental Industrial
          Hygienists (ACGIH) Threshold Limit Values (TLVs) when extreme
          temperature exposure is involved. These TLVs serve as occupational
          exposure limits or guidelines for each jurisdiction as shown in the
          table below where Sections 7.33 to 7.38 under British Columbia address
          the current ACGIH TLVs for cold exposure.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "What is the Implication of breach of these OHS Laws and what are the sanctions?",
    image: kathleenbanner,
    author: "Kathleen",
    authorPic: kathleen,
    published_date:"December 1 , 2023",
    reading_time: "8 minutes",
    content: (
      <div className="text-[#bec6c7]">
       <p className="py-6">Failure to observe and follow the Occupational Health and Safety laws or regulations may penalize the company or the employer. The important rules in OH&S that every stakeholder must take into account are the Right to Know, the Right to Participate, and the Right to Refuse. Moreover, everyone has distinct responsibilities or roles to play in keeping the workplace safe.
Penalties for noncompliance with the OHS laws vary from different provinces in Canada.  In Alberta, if the worksite party is guilty, they can be sentenced with a fine, imprisonment, corporate probation, or a combination. Under section 48(1) of the OSH Act, a first offense carries a fine of up to $500,000 for each offense and up to six months in prison. If convicted of the first offense, he could also be fined up to $30,000 a day. For the second offense, each violation carries a fine of up to $1 million and/or up to 12 months in prison. If the offender continues to commit the offense, he can be fined up to $60,000 for each day the offense continues.
In Ontario, a person convicted of an offense under the OHSA will be liable for paying fines of up to $1,500,000 for companies, $1,500,000 and imprisonment for up to 12 months for directors and officers of a corporation and for all others, a fine of up to $500,000 and imprisonment for up to 12 months.
</p>
<iframe width="315" height="560"
src="https://www.youtube.com/embed/xitlf7rBZo0"
title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture;
web-share"
allowfullscreen></iframe>
<p className="pt-6 pb-2">Employers who violate the provisions of the BC OHSR may be subject to administrative penalties (OHS penalties) in the form of fines. WorkSafe can impose a fine if</p>
<li>Failure to take adequate precautions to prevent occupational accidents or illnesses.</li>
<li>Failed to comply with the Health and Safety at Work Regulations, the Workers' Compensation Act OH&S Regulations or the Compliance Order.</li>
<li>You have an unsafe workplace or working conditions.</li>
<p className="py-6">Moreover, the amount of the fine depends, among other things, on the nature and severity of the violation, the company's history of violations, and the size of the company's payroll. Penalties may be greater if the violation is intentional or risky where the maximum penalty for a violation is $759,368.84.</p>
  <a href={Pdf} target = "_blank" className="pb-6 text-green-500 font-extrabold">Click me to WCAT</a>
  <p className="py-6">This pertains to an appeal between the worker who was exposed to 5hr extreme cold with a low -29C° and a high -18C° and was diagnosed with hypothermia while delivering mail on foot and an employer who submitted a dispute that the worker’s symptoms arose out of his employment activities. During the appeal, the employer implied that the worker was dressed in layered clothing that was designed to protect in cold temperatures and the Board medical advisor added that the worker did not have hypothermia on the day of the incident. Moreover, He provided an opinion that given the worker’s normal temperature on admission to an emergency, together with a lack of core symptoms related to hypothermia, the recorded diagnosis was not supported by the available evidence. On the other hand, the worker submitted evidence that he had developed symptoms of hypothermia such as dizziness, a core temperature below 35C°, hyperventilation, and shortness of breath. At the end of the appeal, the WCAT concluded that Hazards Arising from Nature provides that where an injury results from natural elements, compensation is payable in situations where the worker’s job is to place him in a greater position of hazard to those elements as compared to the public at large. WCAT denied the employer's appeal and validated that the worker’s diagnosed hypothermia arose out of and in the course of his employment. However, in this decision, there were no expenses requested concerning the appeal.
</p>
<h1 className="text-orange text-3xl py-6">Statistics in this area.</h1>
<p className="pb-6">Compared to other countries in the world, Canada has the harshest winter climate. In terms of its cold environment statistics, Canadian workers face extreme cold weather conditions that impact health. In addition, risk factors for cold stress include wind chill, prolonged exposure, and inadequate protection. When it comes to illnesses and injuries, cold stress can include frostbite, hypothermia, and other cold-related ailments. Moreover, controls for work environments involve proper clothing, work-rest schedules, and awareness of wind chill effects.
Under risk factors, between 2017 and 2021, WorkSafeBC reported nearly 100 claims for cold stress-related injuries, 80% of which occurred in the winter months (November to March). Working in cold conditions especially in the winter season can provoke slips, trips and fall. According to WorkSafeBC, slip, trip and fall injuries increased by 11 per cent between November and March. Many of them suffered serious injuries, including fractures, sprains and dislocations.
</p>
<img src={kathleen2}  alt="" className="w-full"/>
<p className="py-6">According to the U.S. Bureau of Labor Statistics, the years 2016-2020 show that there are more injuries and accidents during ice, sleet, and snow season. </p>
      </div>
    ),
  },
  {
    id: 6,
    title: "How does it manifest in the workplace and in what format?",
    image:nicole2,
    author: "Nicole",
    authorPic: nicole,
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content: (
      <div className="text-[#bec6c7]">
      <p className="py-6">According to WorkSafeBC (2021), conditions such as cold and bad weather can be quite difficult, particularly for people who work outside or engage in outdoor activities. People's safety, health, and well-being depend on their ability to recognize the warning signals and to prepare for cold weather. Before identifying the potential reasons why accidents happen in this area, it is important to identify which workers are at risk. </p>
      <li>Outdoor workers</li>
      <li>

Workers in refrigerated warehouses.
</li>
      <li>Meat packaging and meat storage workers.</li>
      <li>Outdoor recreation workers (and enthusiasts)
</li>
<p className="py-6 text-orange">How do recognize when cold weather is approaching and what needs to be done to prepare them for such severe weather?
</p>
<img src={nicole1} alt=''/>
<p className="py-6">

Recognizing and preparing for cold conditions requires a combination of vigilance, self-awareness, and adherence to guidelines. By staying informed, dressing appropriately, and being proactive in response to changing weather conditions, individuals can minimize the risks associated with exposure to cold weather. Whether at work, during outdoor activities, or in day-to-day life, readiness for cold conditions is a fundamental aspect of personal safety and well-being.
</p>
      </div>
    ),
  },
  {
    id: 8,
    title: "What are the OHS risks in this area?",
    image: risk,
    author: "Nicole",
    authorPic: nicole,
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content: (
      <div className="text-[#bec6c7]">
    <p className="py-6">The health risks and the possibility of different health concerns when outdoors at different temperatures are illustrated in the following chart from Environment Canada (Government of Canada, 2023). 
</p>
<img src={nicole6} alt=""/>
<img src={nicole3} alt=""/>
<div className="pt-12 my-6"><img src={nicole4} alt=""/></div>
<iframe
          className="text-center"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/Hea00kHH8OA?si=CS3NIjzbAGYoke3Z"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
          <div className="py-6 font-bold text-2xl text-green-500 underline">
          <a href="https://www.ccohs.ca/oshanswers/phys_agents/cold/cold_working.html" target="_blank"> Cold Environments</a></div>
      </div>
    ),
  },

  {
    id: 11,
    title: "What are the best OHS practices in this area?",
    image: ohs,
    author: "rebekah",
    authorPic: rebekah,
    published_date: "2023-10-01",
    reading_time: "10 minutes",
    content: (
      <div className="text-[#bec6c7]">
        <p className="mb-4">
          WorkSafeBC in 2020 issued a cautionary reminder to employers and
          workers about the significance of taking safety measures while working
          in cold weather. Between 2015 and 2018, 30 workers in British Columbia
          suffered injuries due to cold exposure, with frostbite being the most
          common cold-related injury. Frostbite can rapidly develop in extreme
          temperatures, particularly in the presence of wind or wet clothing.
          Additionally, cold stress can lead to hypothermia, posing fatal risks
          if not addressed promptly. Barry Nakahara, Senior Manager of
          Prevention Field Services at WorkSafeBC, highlighted the severity of
          injuries that can occur when unprepared for working in cold
          conditions, stressing the critical role of proper clothing and
          equipment. Various industries such as transport, recreation,
          construction, and utility work involve significant outdoor exposure to
          cold weather, necessitating employers to conduct cold-stress
          assessments and implement protective plans for workers.
        </p>
        <h1 className="pt-6 pb-2 text-orange">
          WorkSafeBC provides the following safety tips for working in cold
          weather:
        </h1>
        <li>Wear warm head covering.</li>
        <li>Layer clothing to allow sweat to escape and trap heat.</li>
        <li>
          Protect hands and feet. Wear waterproof boots and always wear gloves
          or mittens.
        </li>
        <li>
          Pace any vigorous work with scheduled breaks away from the cold.
          Fatigue is a risk factor in the cold.
        </li>
        <li>
          Stay hydrated. Limit the amount of coffee or tea and avoid alcohol.
        </li>
        <li>
          When possible, heat the working environment. For example, heated
          shelters help protect construction workers from cold and damp
          environments.
        </li>
        <h1 className="my-4 text-white font-bold text-center">
          WorkSafeBC also published a template questions to mitigate risks using
          the Heirarchy of Controls:
        </h1>
        <ol className="list-decimal">
          <li className="mb-4">
            <span className="text-orange font-bold text-lg block">
              Elimination or substitution
            </span>
            Eliminating the hazard by substituting a safer process or material,
            where possible, is the most effective control. Some questions to
            consider: Can the work be done in a different environment? Can a
            process that generates less cold or water be used?
          </li>
          <li className="mb-4">
            <span className="text-orange font-bold text-lg block">
              Engineering controls
            </span>
            Making physical modifications to facilities, equipment and processes
            can reduce exposure. Some questions to consider: Can heated warming
            shelters be placed on site? Can machines and tools be designed so
            that they can be operated without having to remove mittens or
            gloves?
          </li>
          <li className="mb-4">
            <span className="text-orange font-bold text-lg block">
              Administrative controls
            </span>
            These involve changing work practices and work policies. Providing
            awareness tools and training also count as administrative controls.
            All can limit the risk of cold stress. Some questions to consider:
            Has an exposure control plan been developed? Can warning signs be
            posted in the work area? Can work rotation be used to decrease cold
            exposure? Can signs explaining exposure symptoms be posted? Can
            written safe work procedures be posted? Can work be paced
            differently so that workers don't have to exert themselves to the
            point of heavy sweating? Have workers received training and
            education to increase awareness of signs and symptoms of cold
            stress?
          </li>
          <li className="mb-4">
            <span className="text-orange font-bold text-lg block">
              Personal protective equipment
            </span>
            This is the least effective control. When used, there must always be
            at least one other control in place as well. Some questions to
            consider: Can personal battery-operated heaters or chemical heating
            pads under clothing be used? Do workers have the proper protective
            clothing? (They need a warm head covering and layered clothing. They
            also need to keep hands and feet warm and dry.) Has personal
            protective equipment been tested to make sure it is working
            properly?
          </li>
        </ol>
        <p className="mb-4">
          Canadian Centre for Occupational Health and Safety published that
          there are certain exposure limits that workplace should observe. They
          cited that American Conference of Governmental Industrial Hygienists
          (ACGIH) suggests a work-warming regimen when work is done continuously
          in the cold when the wind chill temperature is at or below-7°C
          (19.4°F), heated warming shelters (tents, cabins, rest rooms, etc)
          should be made available nearby. Workers should be encouraged to use
          these shelters, depending on the severity of the exposure. If signs of
          cold stress are noticed, return to the shelter immediately. For work
          at or below -12°C (10.4°F), work should include:
        </p>
        <li>constant observation (supervisor or buddy system),</li>
        <li>
          adjusting the pace or rate of work so that it is not too high and
          cause heavy sweating that will result in wet clothing
        </li>
        <li>time for new employees to become accustomed to the conditions</li>
        <li>
          adjusted to include the weight and bulkiness of the clothing when
          estimating work performance and weights to be lifted by the worker
        </li>
        <li>
          arranged in such a way that sitting and standing for long periods is
          minimized
        </li>
        <li>
          instructions in safe work practices, re-warming procedures, proper
          clothing practices, proper eating and drinking habits, recognition of
          cold stress/frostbite, and signs and symptoms of hypothermia or
          excessive cooling of the body (including when shivering does not
          occur)
        </li>
        <h1 className="text-white text-bold text-center my-4">
          A research entitled “A model for managing cold-related health and
          safety risks at workplaces” by Risikko et. al (2003), highlighted the
          following framework:
        </h1>
        <li children="mb-4 list-none mb-4">
          <span className="text-orange"></span>
          Cold risk management should be fully integrated into the occupational
          health and safety (OHS) management system and practices of the
          company, in order to ensure the implementation and continuance of the
          activities. It shall thus follow the international and national OHS
          legislation and norms.
        </li>
        <img src={revi1} alt=""/>
        <li children="mb-4 list-none mb-4">
          <span className="text-orange block">
            Standards. Risk assessment and management methods{" "}
          </span>
          ISO thermal standards provide guidelines of assessment and evaluation
          methods for thermal environments. Several of these standards can be
          used for assessing thermal risks caused by cold exposure. Most of the
          methods are self-contained, but they should be used in conjunction
          with each other in a comprehensive assessment
        </li>
        <li children="mb-4 ">
          <span className="text-orange block">
            {" "}
            A systematic model for managing cold risks{" "}
          </span>
          The action model produced for assessing and managing the coldinduced
          health and safety risks at work is shown in figure 2. The activities
          must follow the norms given by general occupational safety laws, trade
          agreements and industry-specific safety regulations. In order to
          ensure the implementation and continuance of the activities, the cold
          risk management is integrated into the company’s OHS management system
          and general risk assessment and management practices
        </li>
        <li children="mb-4">
          <span className="text-orange block"> Cold Assessment</span>
          The method is based on observation and does not require comprehensive
          training, or knowledge in e.g. ergonomics. Furthermore, for a person
          at the workplace who is well aware of the contents of the work,
          conducting the observation does not require a long time, and is
          inexpensive for the company.
        </li>
        <li children="mb-4 block">
          <span className="text-orange block">Cold Risk Assessment</span>
          According to the identified and assessed cold risks, various
          preventive measures against these hazards shall be planned and carried
          out at the workplace by the occupational safety delegates, supervisors
          and workers. All parties need to be informed about the actions to be
          made. The responsible person for each action are named. The activities
          shall be planned in written form, either as a part of the general
          occupational safety plan of an individual workplace, or as a separate
          cold risk management plan (figure 3). The purpose of the planning is
          to systematically take into account different aspects related to cold,
          as well as to guarantee the successful timing for implementing
          different preventive activities.
        </li>
        <img src={coldrisk} alt="" />
        <li children="mb-8">
          <span className="text-orange block">
            {" "}
            Planning and Organizing the Work
          </span>
          Organisational cold preventive measures are planned while planning and
          organising the work. Their main purposes are to control the duration
          and intensity of the cold exposure and to provide sufficient time,
          measures and spaces for recovery. For example, in outdoor work, extra
          manpower can be provided to reduce the cold exposure time. The work
          load should also be kept at a rather constant level to avoid excessive
          sweating and evaporative cooling after it.
        </li>
        <h1 className="text-orange text-2xl py-6 text-center underline">Identify the following in the workplace:</h1>
        <p className="py-4"><span className="text-orange text-bold pr-6">Technical preventive measures </span>Technical preventive measures are conducted to reduce the radiative, convective and conductive heat loss from the worker. For example, a wind-shelter reduces both the convective heat through the clothing and the risk of frostbite on the bare skin. In indoor work, for example, the temperature gradients shall be reduced and the heat conduction to cold surfaces and products decreased. </p>
        <p className="py-4"><span className="text-orange text-bold pr-6">Protective clothing and personal protective equipment (PPE) 
</span>Protective clothing and PPE are chosen and used on the basis of the workplace risk assessment. The need for thermal insulation can be roughly determined by, for example, the IREQ index (24), and individual adjustment is achieved through the selection of underwear and intermediate layers. Guidelines for required protective and functional properties of cold protective clothing and protective clothing against foul weather are given in the European standards (25,26). In addition, protection of the extremities shall be taken care of. Attention should also be payed towards the compatibility of the protective clothing with the PPE. </p>
        <p className="py-4"><span className="text-orange text-bold pr-6">Training and information 
</span>In order to ensure the successfull implementation of the cold risk management model and preventive methods, the workers, foremen and occupational safety persons need to be trained for recognising the cold risks and knowing the ways to prevent, or reduce them. Training and information, as well as learning and guidance material, shall be context-bound. </p>
        <p className="py-4"><span className="text-orange text-bold pr-6">Occupational health care </span>The individual cold-related health aspects of the workers shall be identified and taken into consideration in the occupational health care of a workplace. For the identification of health-related problems, a specific health check for cold work has been designed (20). Thus, the information from the hazards at the workplace and the individual health aspect may be used in combination.
</p>
<h1 className="text-orange text-2xl text-bold py-8">Other Best Practices that can be observed to mitigate risks of working under cold weather conditions:
</h1>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ImVht5qeNWE?si=8-jgvMkMfj3taBKa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </div>
    ),
  },
  {
    id: 13,
    title: "Why do accidents happen in this area?",
    image: accident,
    author: "Rebekah",
    authorPic: rebekah,
    published_date: "2023-12-1",
    reading_time: "3 minutes",
    content: (
      <div className="text-[#bec6c7]">
        <p className="mt-4">
          As published by Canadian Centre for Occupational Health and Safety,
          cold affect work performance as it can lead to lower work efficiency
          and higher incident rates. Cold impairs the performance of complex
          mental tasks. Manual tasks are also impaired because the sensitivity
          and dexterity of fingers are reduced in the cold. At even lower
          temperatures, the cold affects the deeper muscles resulting in reduced
          muscular strength and stiffened joints. Mental alertness is reduced
          due to cold-related discomfort.
        </p>
        <p className="mt-4">
          Colder temperatures may cause low energy, muscle strains, and falls.
          More in general, the effect of extreme temperatures on occupational
          health may operate through different channels, such as workers’ lower
          reaction capacities, cognitive performance, and concentration (Graff
          Zivin et al., 2018 as cited by Filomena & Picchio, 2023); compromised
          decision-making abilities (Heyes and Saberian, 2019 as cited by
          Filomena & Picchio, 2023); higher physical and mental stress (Heal and
          Park, 8 2016 as cited by Filomena & Picchio, 2023); perceived fatigue
          and energy outlays (Deschênes and Greenstone, 2011 as cited by
          Filomena & Picchio, 2023); increased costs of safety investments for
          both workers and firms (Park et al., 2021 as cited by Filomena &
          Picchio, 2023).
        </p>
        <p className="mt-2">
          For all these reasons accidents are more likely to occur in very cold
          working conditions
        </p>
      </div>
    ),
  },
  {
    id: 12,
    title: "How can we raise awareness about hazards in this area?",
    image: awareness,
    author: "Rebekah",
    authorPic: rebekah,
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content: (
      <div className="text-[#bec6c7] block">
        <p className="mb-4">
          <span className="text-orange">Training Programs:</span> Conduct
          regular training sessions to educate employees on the risks of working
          in cold conditions, symptoms of cold-related illnesses, and the
          importance of proper attire and precautions.
        </p>
        <p className="mb-4">
          <span className="text-orange mb-4">Visual Aids and Signage:</span>{" "}
          Display posters, signs, and infographics highlighting cold-related
          hazards and safety practices in prominent work areas.
        </p>
        <p className="mb-4">
          <span className="text-orange mb-4">Communication Channels:</span>{" "}
          Utilize various communication channels such as safety meetings,
          newsletters, and emails to consistently remind and update employees
          about cold weather safety measures.
        </p>
        <p className="mb-4">
          <span className="text-orange mb-4">Peer-to-Peer Education:</span>{" "}
          Encourage experienced workers to share their knowledge and experiences
          regarding working in cold conditions, fostering a culture of mutual
          awareness and support.
        </p>
        <p className="py-6">By actively raising awareness about associated hazards, organizations can significantly reduce the risks and ensure the safety and well-being of their employees working in such conditions.</p>
      </div>
    ),
  },
 
  {
    id: 14,
    title:
      "What are the interventions and training that can be carried out in this area?",
    image: trainingg,
    author: "Nadia",
    authorPic: nadia,
    published_date: "2023-12-01",
    reading_time: "4 minutes",
    content: (
      <div className="text-[#bec6c7]">
        <h1 className="text-center text-3xl py-6 font-bold">Interventions</h1>
        <ul>
          <li className="mb-4">
            <span className="text-orange">
              Proper Insulation and Protective Clothing
            </span>{" "}
            Ensure workers are provided with and encouraged to use layered
            protective clothing for insulation (American Conference of
            Governmental Industrial Hygienists [ACGIH], 2021).
          </li>
          <li className="mb-4">
            <span className="text-orange">
              Physical Activity and Controlled Exposure
            </span>{" "}
            Encourage physical activity to generate body heat. Implement
            work/rest schedules to manage exposure to cold effectively
            (Occupational Health and Safety Regulations, British Columbia,
            2021).
          </li>
          <li className="mb-8">
            <span className="text-orange">Heated Warming Shelters</span> Provide
            access to heated warming shelters based on the severity of
            exposure.Workers should use shelters when signs of cold stress are
            noticed (Occupational Health and Safety Regulations, British
            Columbia, 2021).
          </li>
        </ul>
        <h1 className="text-center text-3xl py-6 font-bold">Training </h1>
        <ul>
          <li className="mb-4">
            <span className="text-orange">
              Awareness of Cold Stress Symptoms{" "}
            </span>
            Conduct training to increase awareness of signs and symptoms of cold
            stress (Occupational Safety and Health Administration [OSHA], 2021).
            Ensure workers and supervisors can recognize adverse effects of
            exposure to cold (World Health Organization [WHO], 2021).{" "}
          </li>

          <li className="mb-4">
            <span className="text-orange">Safe Work Practices </span>Educate
            workers about safe work practices in cold environments.Provide
            guidelines on avoiding accidents, such as proper clothing, physical
            activity, and rest (Occupational Health and Safety Regulations,
            British Columbia, 2021){" "}
          </li>

          <li className="mb-4">
            <span className="text-orange">Physical Fitness Requirements </span>
            Communicate the physical fitness requirements for work in cold
            conditions.Emphasize the importance of maintaining good physical
            condition to cope with the challenges of cold environments
            (Occupational Health and Safety Administration [OSHA], 2021).
          </li>
          <li className="mb-4">
            <span className="text-orange">Emergency Procedures </span>Provide
            training on emergency procedures in case of cold-related
            injuries.Ensure workers know how to respond to situations like
            frostbite or hypothermia (Occupational Health and Safety
            Administration [OSHA], 2021).
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 15,
    title: "Is training a statutory requirement in this area? ",
    image: training,
    author: "Nadia",
    authorPic: nadia,
    published_date: "2023-10-01",
    reading_time: "1 minutes",
    content: (
      <div className="text-[#bec6c7]">
        <p>
          <span className="ml-12">While </span>there are no specific training
          requirements explicitly mentioned in the Occupational Health and
          Safety (OHS) law, it is recommended that workers and supervisors
          involved in work in cold environments receive training (Canada Labour
          Code, Part II, 1985).
        </p>
      </div>
    ),
  },
  {
    id: 16,
    title:
      "Reflection",
    image: refle,
    author: "Team",
    authorPic:'',
    published_date: "2023-10-01",
    reading_time: "6 minutes",
    content: (
      <div className="text-[#bec6c7]">
      <h1 className="text-orange text-3xl underline py-4">Rebekha Bao</h1>
      <p>
      <span className="block pb-4">Health and Safety is everyone’s responsibility. </span>

This learning team assignment has allowed me to learn in-depth how important establishing and implementing policies is in the overall success of an organization. There may be less appreciation in this department considering organizations are always prioritizing generating income, it is important to note that strong health and safety policies and practices lead organizations to long-term financial accomplishment. Specific to our topic: Building a guide to ensure health and safety practices are followed when working under cold conditions, I have learned that the adage prevention is better than cure is not just a set of wise words but is truly logical and important to remember. Weather conditions are something that we cannot change but we can only predict and prepare for. Similarly, roles that inevitably would require workers to work in cold conditions would mean workers are left without any choice but to make sure they follow strict health and safety protocols.  In this case, organizations must ensure that protocols are communicated well and that all employees know that there are organizational and government policies safeguarding them in this area. 

<span className="block py-6">As a team, this assignment has engaged us to contribute ideas, make time and communicate consistently. Our collaboration has made completing this assignment and the rest of our assignments in a seamless manner.</span>
</p>
<h1 className="text-orange text-3xl underline py-4">
Maria Tabares
</h1>
<p>For a successful team, collaborative effort is essential. Each member must contribute their unique skills and strengths to attain collective goals with utmost effectiveness and efficiency.
</p>
<h1 className="text-orange text-3xl underline py-4">Nadia Ireri Luna Lazaro</h1>
<p>The information provided underscores the critical importance of implementing comprehensive measures to ensure the safety and well-being of workers in cold conditions, particularly in Vancouver, Canada. The adoption of the American Conference of Governmental Industrial Hygienists (ACGIH) Threshold Limit Values® for cold stress, as outlined in the British Columbia Occupational Health and Safety Regulations, sets a standard for addressing the challenges posed by low temperatures, wind, and wetness. The potential legal consequences for breaching the Occupational Health and Safety (OHS) law, including criminal offences under Part II of the Canada Labour Code, highlight the gravity of ensuring compliance with health and safety standards. It is clear that the manifestation of risks in the workplace due to cold conditions, such as hypothermia and frostbite, can be life-threatening, emphasizing the need for effective interventions. <span className="block py-4">

The recommended interventions, ranging from proper insulation and clothing to physical activity and the provision of heated warming shelters, align with best practices outlined by authoritative sources such as the Occupational Safety and Health Administration (OSHA) and the World Health Organization (WHO). Training and awareness programs are crucial components to empower workers and supervisors with the knowledge needed to recognize and respond to cold stress symptoms. While the OHS law in Vancouver may not explicitly mandate training, the reflective integration of training into workplace practices is evident. Employers are encouraged, if not obligated, to educate workers on safe practices, physical fitness requirements, and emergency procedures. The absence of specific training requirements in the law does not diminish the importance of education in preventing accidents and ensuring a safe working environment in cold conditions.</span>
<span className="block pb-4">
In conclusion, the provided information emphasizes a holistic approach to worker safety in cold conditions, encompassing legal compliance, risk mitigation through interventions, and the empowerment of workers through training and awareness programs. Employers in Vancouver are positioned to foster a culture of safety that goes beyond mere compliance, actively promoting the well-being of their workforce in challenging environmental conditions.</span>
</p>
<h1 className="text-orange text-3xl underline py-4">Kathleen Anne Custodio</h1>
<p>Through the process of making our learning team assignment, there were numerous situations where the chosen theme had less information concerning the specific statistics, podcasts, and videos on the injuries and incidents during cold conditions in the workplace within Canada. During this process, I realized how Occupational Health and Safety Acts, policies, and regulations are important in our daily lives. Learning OHS in this country made me wonder why back in my home country, OHS laws existed but never discussed even a little in my field of study. The LT assignment had a huge impact on expanding my knowledge and understanding of the rights of every employee in the workplace, the importance of safety protocols that you can apply within and outside the workplace, and instilling that prevention is better than cure. <span className="block py-4">
From our learning team experience, we learned how to communicate and understand everyone’s wants and needs in creating the assignment considering that we are from different countries with diverse languages. In addition, the process was seamless since everyone was responsible for the assigned tasks and did their best to create the best outcome that they had. Creating the assignment through Wiki is eye-opening and a new experience as it allows us to have the opportunity to share information, knowledge, and ideas with our fellow students or other users.</span> <span className="block pb-4">
To achieve self-improvement, I must continue learning from others, especially those who have more experience in various fields of work, actively engaging with new activities by asking questions and participating in discussions. The advice I would give to others is to enjoy, value, and manage their time with themselves, their studies, families, and friends to avoid stress and anxiety.</span>
</p>
<h1 className="text-orange text-3xl underline py-4">
Nicole Angeline Dizon
</h1>
<p> Working in cold conditions has been a transformative experience, prompting deep self-reflection on various aspects of my professional and personal growth. The challenges posed by frigid temperatures have served as a crucible, shaping my adaptability, resilience, and overall approach to work. <span className="block py-3">
   Effective task delegation and specialization within the team became evident as a strategic approach. Clearly defining roles and responsibilities based on individual strengths and expertise ensured optimal utilization of team members' skills. This streamlined operations, enhanced efficiency, and underscored the importance of leveraging diverse talents within the team to achieve shared objectives.</span><span className="block pb-3">
    This team project focused on working in cold conditions highlights the importance of communication, preparedness, teamwork, flexibility, safety, and continuous improvement. These learnings extend beyond the immediate context of weather-related projects, contributing to the development of a resilient and effective team capable of tackling diverse challenges in the professional landscape.</span>
</p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Learning team contract",
    image: agree,
    author: "team",
    authorPic: agree,
    published_date: "2023-10-01",
    reading_time: "2 minutes",
    content: (
      <div className="w-full h-screen mt-24">
        <div className="w-[75%] h-full mx-auto">
          <h1 className="text-center text-[#bec6c7] text-4xl pb-5">
            ASM Team Charter
          </h1>
          <img src={college} alt="college logo" />
          <br />
          <div className="flex flex-row">
            <div>
              <p className="mb-6">
                <span className="font-bold pr-3 text-[#bec6c7]">
                  Subject Name:
                </span>{" "}
                BHRM403: EMPLOYEE RELATIONS, WORKPLACE SAFETY AND WELLNESS{" "}
              </p>
              <p className="mb-6">
                <span className="font-bold pr-3 text-[#bec6c7]">
                  Instructor:
                </span>{" "}
                Dr. Pauric P. O’Rourke{" "}
              </p>
              <p className="mb-6">
                <span className="font-bold pr-3 text-[#bec6c7]">
                  Course Dates:
                </span>{" "}
                Oct. 3, 2023 - Dec. 23, 2023{" "}
              </p>
            </div>
            <div className="flex flex-row">
              <p className="pl-4">
                All group members participated in the creation of this charter
                and agree with its contents{" "}
              </p>
            </div>
          </div>
          <div>
            <p className="mb-2 text-orange font-bold">
              Group Member's Skills and Abilities Inventory:
            </p>
            <ul className="marker:text-white list-disc pl-5 space-y-3 text-[#bec6c7]">
              <li>Proficient verbal and written communication skills.</li>
              <li>
                Strong organizational skills for efficient task prioritization.
              </li>
              <li>Analytical thinking to identify and address challenges.</li>
              <li>Open-mindedness and receptiveness to team members' ideas.</li>
            </ul>
          </div>
          <div>
            <p className="my-2 text-orange font-bold">Team Goals</p>
            <ul className="marker:text-white list-disc pl-5 space-y-3 text-[#bec6c7]">
              <li>
                Establish and adhere to clear deadlines for project completion.
              </li>
              <li>Identify and leverage each team member's unique skills.</li>
              <li>Encourage members to showcase and develop their talents.</li>
              <li>
                Promote open and transparent communication within the team.
              </li>
              <li>Emphasize accountability and ownership of tasks.</li>
            </ul>
          </div>
          <div>
            <p className="my-2 text-orange font-bold">
              What are potential barriers to the achievement of these goals?
            </p>
            <ul className="marker:text-white list-disc pl-5 space-y-3 text-[#bec6c7]">
              <li>Misunderstandings and misinterpretations.</li>
              <li>Unrealistic deadlines leading to stress.</li>
              <li>Fear of stepping out of comfort zones.</li>
              <li>Weak interpersonal relationships among team members.</li>
            </ul>
          </div>
          <div>
            <p className="my-2 text-orange font-bold">
              Team Ground Rules and Expectations
            </p>
            <ul className="marker:text-white list-disc pl-5 space-y-3 text-[#bec6c7]">
              <li>
                All team communication is streamlined through WhatsApp for quick
                and efficient information sharing.
              </li>
              <li>
                Task division and project assignments are documented and shared
                comprehensively via Excel sheets.
              </li>
              <li>
                Every task or project comes with a quoted deadline agreed upon
                by the team.
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <p className="my-2 text-orange font-bold">Conflict Management</p>
            <p className="text-[#bec6c7]">
              Potential conflicts may arise from differences in communication
              styles, work habits, or task understanding. Competing priorities
              and conflicting deadlines could also pose challenges. To address
              these issues, the team utilizes WhatsApp for open communication
              and regular updates via shared Excel sheets to minimize
              misunderstandings. In case of conflicts, members engage in
              constructive dialogue, actively listening to each other's
              perspectives. Emphasizing collaboration, the team prioritizes
              compromise and consensus-building for efficient conflict
              resolution, fostering a positive team environment.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Team Evaluation",
    image: evaluationpic,
    author: "Team",
    authorPic: "",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content: (
      <div>
        <img src={nadiaevaluation} alt="" />
         
        <p className="pt-8 text-sm">*All other team members has same evaluation so, we only post 1</p>
      </div>
    ),
  },
  {
    id: 5,
    title: "References",
    image: reference,
    author: "Teams",
    authorPic: "",
    published_date: "2023-10-01",
    reading_time: "5 minutes",
    content: (
      <div className="text-[#bec6c7]">
        <p className="pb-4">
          ACGIH. (2021). Threshold Limit Values® for cold stress. Retrieved from
          https://www.ccohs.ca/oshanswers/phys_agents/temp_legislation.html
        </p>

        <p className="pb-4">
          Canada Labour Code, Part II. (1985). Retrieved from
          https://www.canada.ca/en/employment-social-development/services/health-safety/reports/compliance.html
        </p>

        <p className="pb-4">
          Occupational Health and Safety Administration (OSHA). (2021). Cold
          Stress Guide. Retrieved from
          https://www.ccohs.ca/oshanswers/phys_agents/cold_cold.html
        </p>

        <p className="pb-4">
          Occupational Health and Safety Regulations, British Columbia. (2021).
          Retrieved from
          https://www.ccohs.ca/oshanswers/phys_agents/cold/cold_general.html
        </p>

        <p className="pb-4">
          World Health Organization (WHO). (2021). Public health, environmental
          and social determinants of health (PHE). Retrieved from
          https://www.ccohs.ca/oshanswers/phys_agents/cold/cold_working.html
        </p>
        <p className="pb-4">
        Occupational Health and Safety Regulation. (n.d.). https://www.bclaws.gov.bc.ca/civix/document/id/complete/statreg/296_97_05#section7.16
        </p>
        <p className="pb-4">
        Roles, rights & responsibilities. WorkSafeBC. (2016, June 8). https://www.worksafebc.com/en/health-safety/create-manage/rights-responsibilities

         </p>
         <p className="pb-4">
         Search past decisions: Workers’ compensation appeal tribunal (WCAT). Workers’ Compensation Appeal Tribunal (WCAT) | Search past decisions. (2022, May 12). https://www.wcat.bc.ca/home/search-past-decisions/

         </p>
         <p className="pb-4">
         
Tanja Risikko, Tiina M. Mäkinen, Arvid Påsche, Liisa Toivonen & Juhani Hassi (2003) A model for managing cold-related health and safety risks at workplaces, International Journal of Circumpolar Health, 62:2, 204-215, DOI: 10.3402/ijch.v62i2.17557

         </p>
         <p className="pb-4">
         U.S. Bureau of Labor Statistics. (n.d.). Workplace deaths from weather and atmospheric conditions. U.S. Bureau of Labor Statistics. https://www.bls.gov/opub/ted/2022/workplace-deaths-from-weather-and-atmospheric-conditions.htm
         </p>
         <p className="pb-4">
         Winter weather contributes to workplace injury Spike: Worksafebc. OHS Canada Magazine. (n.d.). https://www.ohscanada.com/features/winter-weather-contributes-to-workplace-injury-spike-worksafebc/

         </p>
         <p className="pb-4">
         WorkSafeBC. (2021, December). WorkSafeBC reminding employers and workers to take precautions when working in cold weather. WorkSafeBC. https://www.worksafebc.com/en/about-us/news-events/news-releases/2021/December/worksafebc-reminding-employers-employers-workers-to-take-precautions-when-working-in-cold-weather 

         </p>
         <p className="pb-4">
         
World Health Organization (WHO). (2021). Public health, environmental and social determinants of health (PHE). Retrieved from https://www.ccohs.ca/oshanswers/phys_agents/cold/cold_working.html

         </p>
      </div>
    ),
  },
];

export { projects, blogData };
