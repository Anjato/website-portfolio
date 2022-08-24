import React from 'react';
import {
    Section,
    SectionDivider,
    SectionText,
    SectionTitle
} from '../../styles/GlobalComponents';
import {GridContainer} from '../Projects/ProjectsStyles.js'
import {ListItem, ListTitle, ListParagraph, List, ListContainer} from "./HomeLabStyles";

const HomeLab = () => (
    <Section id={"homelab"} >
        <SectionDivider/>
        <GridContainer/>
        <SectionTitle>HomeLab & Network Setup</SectionTitle>
        <SectionText>
            Around the start of August I began purchasing equipment for a homelab environment. I did this to grow my
            knowledge in the IT space and quickly fell down a deep rabbit hole with one thing after another.
        </SectionText>

        <List>
            <ListItem>
                <ListContainer>
                    <ListTitle>Access Point</ListTitle>
                        <ListParagraph>• TP-Link AX3000 Wifi 6</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Cameras</ListTitle>
                    <ListParagraph>• Loryta IPC-T2431T-AS 3.6mm</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Firewall</ListTitle>
                        <ListParagraph>• Opnsense Mini PC</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Servers</ListTitle>
                        <ListParagraph>• 1x Custom built desktop | z270m Pro4 mATX, 2x8GB 2400MHz RAM, I7-6700, GTX 1060</ListParagraph>
                        <ListParagraph>• 1x Dell R720 | 2x Intel Xeon E5-2690 @ 2.9 GHz, 8x16GB RAM, 8x6TB ST6000NM044</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Switch</ListTitle>
                        <ListParagraph>TBD</ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <ListContainer>
                    <ListTitle>Virtual Machines</ListTitle>
                        <ListParagraph>• Docker
                            <ListParagraph>- Arr's</ListParagraph>
                            <ListParagraph>- Homer</ListParagraph>
                            <ListParagraph>- Jackett</ListParagraph>
                            <ListParagraph>- Nextcloud AIO</ListParagraph>
                            <ListParagraph>- Photoprism</ListParagraph>
                            <ListParagraph>- Portainer</ListParagraph>
                            <ListParagraph>- qBittorrent VPN</ListParagraph>
                            <ListParagraph>- Radarr</ListParagraph>
                            <ListParagraph>- Sonarr</ListParagraph>
                            <ListParagraph>- Vaultwarden</ListParagraph>
                        </ListParagraph>
                        <ListParagraph>• Home Assistant</ListParagraph>
                        <ListParagraph>• Mac OS</ListParagraph>
                        <ListParagraph>• TrueNAS</ListParagraph>
                        <ListParagraph>• Ubuntu 20.04.1 LTS
                            <ListParagraph>- Portfolio Website</ListParagraph>
                        </ListParagraph>
                        <ListParagraph>• Windows Server 2022
                            <ListParagraph>- Blue Iris</ListParagraph>
                        </ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
    </Section>
);

export default HomeLab;