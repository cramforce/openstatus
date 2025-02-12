import type {
  HomeStatsParams,
  MonitorListParams,
  ResponseDetailsParams,
  ResponseGraphParams,
  ResponseListParams,
  ResponseTimeMetricsByRegionParams,
  ResponseTimeMetricsParams,
} from "@openstatus/tinybird";
import {
  getHomeMonitorList,
  getHomeStats,
  getMonitorList,
  getResponseDetails,
  getResponseGraph,
  getResponseList,
  getResponseTimeMetrics,
  getResponseTimeMetricsByRegion,
  Tinybird,
} from "@openstatus/tinybird";

import { env } from "@/env";

const tb = new Tinybird({ token: env.TINY_BIRD_API_KEY });

// TODO: add security layer
export async function getResponseListData(props: Partial<ResponseListParams>) {
  try {
    const res = await getResponseList(tb)(props);
    return res.data;
  } catch (e) {
    console.error(e);
  }
  return;
}

export async function getResponseDetailsData(
  props: Partial<ResponseDetailsParams>,
) {
  try {
    const res = await getResponseDetails(tb)(props);
    return res.data;
  } catch (e) {
    console.error(e);
  }
  return;
}

export async function getMonitorListData(props: MonitorListParams) {
  try {
    const res = await getMonitorList(tb)(props);
    return res.data;
  } catch (e) {
    console.error(e);
  }
  return;
}

// Includes caching of data for 10 minutes
export async function getHomeMonitorListData(
  props: Pick<MonitorListParams, "timezone">,
) {
  try {
    const res = await getHomeMonitorList(tb)({
      monitorId: "1",
      ...props,
      url: "https://www.openstatus.dev",
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
  return;
}

export async function getHomeStatsData(props: Partial<HomeStatsParams>) {
  try {
    const res = await getHomeStats(tb)(props);
    return res.data;
  } catch (e) {
    console.error(e);
  }
  return;
}

export async function getResponseGraphData(
  props: Partial<ResponseGraphParams>,
) {
  try {
    const res = await getResponseGraph(tb)(props);
    return res.data;
  } catch (e) {
    console.error(e);
  }
  return;
}

export async function getResponseTimeMetricsData(
  props: ResponseTimeMetricsParams,
) {
  try {
    const res = await getResponseTimeMetrics(tb)(props);
    return res.data;
  } catch (e) {
    console.error(e);
  }
  return;
}

export async function getResponseTimeMetricsByRegionData(
  props: ResponseTimeMetricsByRegionParams,
) {
  try {
    const res = await getResponseTimeMetricsByRegion(tb)(props);
    return res.data;
  } catch (e) {
    console.error(e);
  }
  return;
}
