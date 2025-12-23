// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import { cookies } from "next/headers";
import { admin } from "@lib/firebase-admin";

export default async function PostsDashboardPage() {
    let loading;
    let error;

    
    if (loading) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <p className="text-neutral-400">Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-neutral-300 p-8">
            <h1 className="text-3xl font-semibold mb-6">Posts Dashboard</h1>
            <div id="posts-list" className="mb-6">
                {/* Posts soon injected here */}
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}