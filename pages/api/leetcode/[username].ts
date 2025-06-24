// File: pages/api/leetcode/[username].ts

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.query;

  // Normalize username (in case it's an array)
  const leetcodeUsername = Array.isArray(username) ? username[0] : username;

  if (!leetcodeUsername || typeof leetcodeUsername !== 'string') {
    return res.status(400).json({ error: 'Invalid username' });
  }

  try {
    const query = `
      query userProfile($username: String!) {
        matchedUser(username: $username) {
          username
          profile {
            ranking
            reputation
            realName
          }
          submitStats {
            acSubmissionNum {
              difficulty
              count
              submissions
            }
          }
        }
      }
    `;

    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        variables: { username: leetcodeUsername },
      }),
    });

    const json = await response.json();
    const data = json.data?.matchedUser;

    if (!data) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching LeetCode data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
