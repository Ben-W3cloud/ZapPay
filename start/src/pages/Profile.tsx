import { useEffect, useState } from 'react';
import { api } from '../services/api';
import type { UserProfile } from '../types';

export function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const data = await api.getProfile();
        setProfile(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    void loadProfile();
  }, []);

  return (
    <div className="mx-auto max-w-xl space-y-5">
      <h2 className="text-2xl font-bold text-slate-800">Profile</h2>
      <section className="rounded-card border border-slate-200 bg-white p-5 shadow-card">
        {loading && <p className="text-slate-500">Loading profile...</p>}
        {error && <p className="text-sm text-rose-600">{error}</p>}
        {!loading && !error && profile && (
          <div className="space-y-3 text-slate-700">
            <p>
              <span className="font-semibold">Full Name:</span> {profile.fullName}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {profile.email}
            </p>
            <p>
              <span className="font-semibold">Phone:</span> {profile.phone}
            </p>
            <p>
              <span className="font-semibold">Plan:</span> {profile.tier}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

