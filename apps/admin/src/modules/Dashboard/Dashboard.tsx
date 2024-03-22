import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@mui/material';
import { ENV_MODE } from '../../config';
import { ViewLayout } from '../../components';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <ViewLayout
      title="Dashboard"
      subtitle="Page view subtitle"
      actions={<>...actions...</>}
      sidebar={
        <>
          <p>
            SIDEBAR CONTENT
            <br />
            Porttitor non nulla, dolor quis purus vivamus dui imperdiet ut nisl mauris id, aliquet commodo maximus
            fermentum. Imperdiet nisl, nulla in donec volutpat vestibulum euismod sem odio ut id ante, auctor ac nibh at
            sem scelerisque. Interdum aliquam, ac nec bibendum nullam suscipit sapien ultrices adipiscing, suscipit non
            aliquet faucibus. Bibendum et vehicula, maximus molestie tempus a scelerisque curabitur nunc ollicitudin,
            sagittis vulputate efficitur magna et. Aliquet bibendum, mollis tristique quam nunc consequat et elit
            suspendisse, vivamus vulputate elementum consequat. Vivamus rhoncus, ultricies sed porttitor id consequat
            fermentum proin fermentum, consectetur justo mollis molestie.
            <br />
            <br />
            Sapien pretium accumsan, fusce vitae vehicula suscipit dui et tempus dui quisque enim, varius elit bibendum
            sagittis. Maximus sagittis, neque etiam hendrerit rhoncus erat vehicula quis finibus, elit varius libero
            adipiscing. Proin molestie, purus arcu duis id pharetra vehicula fringilla vitae massa, convallis cras
            dictum id dolor purus. Turpis nunc, viverra dui hendrerit nec fusce ante sit amet volutpat, id nulla
            elementum erat. Neque elit, lectus adipiscing dui vel integer leo vitae bibendum egestas, volutpat integer
            nulla rhoncus at. Porta ipsum, libero vitae ut congue ollicitudin ligula laoreet pellentesque, rhoncus at
            odio leo cursus feugiat.
          </p>
        </>
      }
    >
      <Card>
        <CardContent>
          Card
          <br />
          Environment: {ENV_MODE}
        </CardContent>
      </Card>
      ...Dashboard...{t('button.open')}
      <p>
        Euismod vestibulum, posuere fringilla molestie felis dui vel dolor consectetur urna, fusce ante porttitor mauris
        quam. Vitae elementum, fermentum sollicitudin volutpat ullamcorper ante vestibulum non, at nullam vestibulum nec
        commodo dignissim. Condimentum dui vel dolor, quam euismod suspendisse libero aliquet augue molestie, fermentum
        sed vitae in ex sem maximus. Nunc nec, nullam lacinia commodo scelerisque suspendisse libero sed ultrices, non
        nulla libero ornare ultricies. Proin consectetur, vel arcu augue suspendisse suscipit metus lacinia rhoncus at,
        posuere lacinia congue nulla nec commodo. Suspendisse suspendisse, et non congue viverra pulvinar hendrerit non
        nulla sollicitudin, neque et augue enim in.
        <br />
        <br />
        Porttitor non nulla, dolor quis purus vivamus dui imperdiet ut nisl mauris id, aliquet commodo maximus
        fermentum. Imperdiet nisl, nulla in donec volutpat vestibulum euismod sem odio ut id ante, auctor ac nibh at sem
        scelerisque. Interdum aliquam, ac nec bibendum nullam suscipit sapien ultrices adipiscing, suscipit non aliquet
        faucibus. Bibendum et vehicula, maximus molestie tempus a scelerisque curabitur nunc ollicitudin, sagittis
        vulputate efficitur magna et. Aliquet bibendum, mollis tristique quam nunc consequat et elit suspendisse,
        vivamus vulputate elementum consequat. Vivamus rhoncus, ultricies sed porttitor id consequat fermentum proin
        fermentum, consectetur justo mollis molestie.
        <br />
        <br />
        Sapien pretium accumsan, fusce vitae vehicula suscipit dui et tempus dui quisque enim, varius elit bibendum
        sagittis. Maximus sagittis, neque etiam hendrerit rhoncus erat vehicula quis finibus, elit varius libero
        adipiscing. Proin molestie, purus arcu duis id pharetra vehicula fringilla vitae massa, convallis cras dictum id
        dolor purus. Turpis nunc, viverra dui hendrerit nec fusce ante sit amet volutpat, id nulla elementum erat. Neque
        elit, lectus adipiscing dui vel integer leo vitae bibendum egestas, volutpat integer nulla rhoncus at. Porta
        ipsum, libero vitae ut congue ollicitudin ligula laoreet pellentesque, rhoncus at odio leo cursus feugiat.
        <br />
        <br />
        Dolor ut sed, cursus maximus nulla in donec proin lorem ultricies, quisque bibendum imperdiet pretium accumsan.
        Quis orci ut, scelerisque a vivamus venenatis turpis imperdiet nullam, odio leo integer pulvinar volutpat. Dui
        integer, consectetur semper lectus in nisi integer nulla convallis, maximus ut sollicitudin nam. Aenean
        fermentum, placerat nibh neque in ex sem euismod dui ante, sapien condimentum varius augue. Mauris bibendum,
        augue duis id tristique at aliquet vitae massa cursus, imperdiet bibendum donec euismod. Posuere aliquam, etiam
        pharetra cursus vulputate nunc libero sed ligula, enim in auctor non adipiscing.
        <br />
        <br />
        Vulputate fermentum, donec nulla nunc molestie augue dolor sit amet neque, egestas libero vitae libero
        suspendisse. Aliquet proin, fusce gravida sit amet quam aenean pharetra sapien mauris, purus ut nisl mauris
        tempus a congue. Sollicitudin ullamcorper, ornare imperdiet in donec phasellus vitae nulla a suspendisse, sapien
        quisque purus consectetur. A vestibulum, imperdiet mauris augue felis quam risus pulvinar, elit ligula non
        cursus. Tortor rhoncus at, felis a quam dui vel nec commodo bibendum tincidunt vel, cras dictum enim in tortor
        nec. Proin metus, sapien id odio morbi efficitur condimentum dolor ut tempus, sollicitudin vitae massa quis
        eget.
      </p>
      <p>
        Euismod vestibulum, posuere fringilla molestie felis dui vel dolor consectetur urna, fusce ante porttitor mauris
        quam. Vitae elementum, fermentum sollicitudin volutpat ullamcorper ante vestibulum non, at nullam vestibulum nec
        commodo dignissim. Condimentum dui vel dolor, quam euismod suspendisse libero aliquet augue molestie, fermentum
        sed vitae in ex sem maximus. Nunc nec, nullam lacinia commodo scelerisque suspendisse libero sed ultrices, non
        nulla libero ornare ultricies. Proin consectetur, vel arcu augue suspendisse suscipit metus lacinia rhoncus at,
        posuere lacinia congue nulla nec commodo. Suspendisse suspendisse, et non congue viverra pulvinar hendrerit non
        nulla sollicitudin, neque et augue enim in.
        <br />
        <br />
        Porttitor non nulla, dolor quis purus vivamus dui imperdiet ut nisl mauris id, aliquet commodo maximus
        fermentum. Imperdiet nisl, nulla in donec volutpat vestibulum euismod sem odio ut id ante, auctor ac nibh at sem
        scelerisque. Interdum aliquam, ac nec bibendum nullam suscipit sapien ultrices adipiscing, suscipit non aliquet
        faucibus. Bibendum et vehicula, maximus molestie tempus a scelerisque curabitur nunc ollicitudin, sagittis
        vulputate efficitur magna et. Aliquet bibendum, mollis tristique quam nunc consequat et elit suspendisse,
        vivamus vulputate elementum consequat. Vivamus rhoncus, ultricies sed porttitor id consequat fermentum proin
        fermentum, consectetur justo mollis molestie.
        <br />
        <br />
        Sapien pretium accumsan, fusce vitae vehicula suscipit dui et tempus dui quisque enim, varius elit bibendum
        sagittis. Maximus sagittis, neque etiam hendrerit rhoncus erat vehicula quis finibus, elit varius libero
        adipiscing. Proin molestie, purus arcu duis id pharetra vehicula fringilla vitae massa, convallis cras dictum id
        dolor purus. Turpis nunc, viverra dui hendrerit nec fusce ante sit amet volutpat, id nulla elementum erat. Neque
        elit, lectus adipiscing dui vel integer leo vitae bibendum egestas, volutpat integer nulla rhoncus at. Porta
        ipsum, libero vitae ut congue ollicitudin ligula laoreet pellentesque, rhoncus at odio leo cursus feugiat.
        <br />
        <br />
        Dolor ut sed, cursus maximus nulla in donec proin lorem ultricies, quisque bibendum imperdiet pretium accumsan.
        Quis orci ut, scelerisque a vivamus venenatis turpis imperdiet nullam, odio leo integer pulvinar volutpat. Dui
        integer, consectetur semper lectus in nisi integer nulla convallis, maximus ut sollicitudin nam. Aenean
        fermentum, placerat nibh neque in ex sem euismod dui ante, sapien condimentum varius augue. Mauris bibendum,
        augue duis id tristique at aliquet vitae massa cursus, imperdiet bibendum donec euismod. Posuere aliquam, etiam
        pharetra cursus vulputate nunc libero sed ligula, enim in auctor non adipiscing.
        <br />
        <br />
        Vulputate fermentum, donec nulla nunc molestie augue dolor sit amet neque, egestas libero vitae libero
        suspendisse. Aliquet proin, fusce gravida sit amet quam aenean pharetra sapien mauris, purus ut nisl mauris
        tempus a congue. Sollicitudin ullamcorper, ornare imperdiet in donec phasellus vitae nulla a suspendisse, sapien
        quisque purus consectetur. A vestibulum, imperdiet mauris augue felis quam risus pulvinar, elit ligula non
        cursus. Tortor rhoncus at, felis a quam dui vel nec commodo bibendum tincidunt vel, cras dictum enim in tortor
        nec. Proin metus, sapien id odio morbi efficitur condimentum dolor ut tempus, sollicitudin vitae massa quis
        eget.
      </p>
    </ViewLayout>
  );
};

export default Dashboard;
