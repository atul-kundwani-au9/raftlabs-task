import React,{useState} from 'react'
import { FirstBg, FirstContainer, VideoBg ,PageContent,PageH1,PageP,BtnWrapper,ArrowForward,ArrowRight,ButtonF} from './FrontElements'
// import { Button } from '../../ui/Button'

export const Front:React.FC = () => {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(prev => { return !prev })
    }
    return (
        <FirstContainer id="home">
            <FirstBg>
           
            </FirstBg>
            <PageContent>
                <PageH1>Find the degrees of separation</PageH1>
                <PageP>
                It is said that all people on average are six, or fewer, social connections away from each other.
                </PageP>
                {/* <PageP>Let's Find Out !!</PageP> */}
                <BtnWrapper>
                    <ButtonF
                        to="people"
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                    >
                        Get Started {hover?<ArrowForward/>:<ArrowRight/>}
                    </ButtonF>
                </BtnWrapper>
            </PageContent>
        </FirstContainer>
    )
}