import {
  CssIcon,
  ExpressIcon,
  FigmaIcon,
  GithubIcon,
  HtmlIcon,
  JavaScriptIcon,
  MongodbIcon,
  NodeIcon,
  OpenIcon,
  PostgreSQLIcon,
  ReactIcon,
  ReduxIcon,
  SequelizeIcon,
  TailwindIcon,
  TypescriptIcon,
  GraphqlIcon
} from './Icons'

interface GenerateTechIconProps {
  iconName: string;
  className: string;
}
export default function GenerateTechIcon ({
  iconName,
  className
}: GenerateTechIconProps) {
  const firstWordOfIcon = iconName.split(' ')[0].toLowerCase()

  if (firstWordOfIcon.includes('react')) { return <ReactIcon className={className} /> } else if (firstWordOfIcon.includes('javascript')) { return <JavaScriptIcon className={className} /> } else if (firstWordOfIcon.includes('node')) { return <NodeIcon className={className} /> } else if (firstWordOfIcon.includes('postgresql')) { return <PostgreSQLIcon className={className} /> } else if (firstWordOfIcon.includes('express')) { return <ExpressIcon className={className} /> } else if (firstWordOfIcon.includes('redux')) { return <ReduxIcon className={className} /> } else if (firstWordOfIcon.includes('html')) { return <HtmlIcon className={className} /> } else if (firstWordOfIcon.includes('css')) { return <CssIcon className={className} /> } else if (firstWordOfIcon.includes('typescript')) { return <TypescriptIcon className={className} /> } else if (firstWordOfIcon.includes('tailwind')) { return <TailwindIcon className={className} /> } else if (firstWordOfIcon.includes('figma')) { return <FigmaIcon className={className} /> } else if (firstWordOfIcon.includes('github')) { return <GithubIcon className={className} /> } else if (firstWordOfIcon.includes('open')) { return <OpenIcon className={className} /> } else if (firstWordOfIcon.includes('sequelize')) { return <SequelizeIcon className={className} /> } else if (firstWordOfIcon.includes('mongo')) { return <MongodbIcon className={className} /> } else if (firstWordOfIcon.includes('graphql')) { return <GraphqlIcon className={className} /> }
}
