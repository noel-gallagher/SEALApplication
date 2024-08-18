import { Image, View, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import Button from '../../Components/Button';
import Text from '../../Components/Text';
import styles from './defaultCSS';
import PracticeSession from '../../Assets/svg/practice_session.svg';
import AssignTasks from '../../Assets/svg/assign_tasks.svg';
import { Appbar } from 'react-native-paper';
import { allUserAchievements } from '../../../Database/dbInitialization';

interface Achievement {
  id: number;
  name: string;
  description: string;
  points: number;
  user_id: number;
}

const AchievementsList = ({ achievements }) => (
  <View>
    {achievements.map((item) => (
      <View key={item.id} style={styles.listItem}>
        <Text>• {item.points} {item.description}</Text>
      </View>
    ))}
  </View>
);

const Index = ({ navigation }) => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const userId = 1; // Replace with the actual user ID of logged in user
        const userAchievements = await allUserAchievements(userId);
        setAchievements(userAchievements);
      } catch (error) {
        console.error('Failed to fetch achievements:', error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <BackgroundWrapper>
      <Appbar.BackAction onPress={() => navigation.navigate('Login')} />
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.header}>Well done!</Text>
          <Text style={styles.subheader}>Achievements</Text>
          <View style={styles.row}>
            <View style={styles.rowItem}>
              <PracticeSession />
              <View style={{ flex: 1 }}>
                <AchievementsList achievements={achievements} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;