import reportService from '../../src/components/pages/TextsGeneration/reportService';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { gameDetails, reportType, audience, customNeeds, selectedGame } = req.body;

    const report = await reportService.generateReport(
      gameDetails,
      reportType,
      audience,
      customNeeds,
      selectedGame
    );

    return res.status(200).json({ report });
  } catch (error) {
    console.error('Error handling report generation:', error);
    return res.status(500).json({ error: 'Failed to generate report' });
  }
} 